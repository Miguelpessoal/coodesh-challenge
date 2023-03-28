import { ModelAttributes } from '@ioc:Adonis/Lucid/Orm'
import { ApiResponse, ApiRequest } from '@japa/api-client'

import User from 'App/Models/User'
import UserFactory from 'Database/factories/UserFactory'

import collect from 'collect.js'

type UserData = Partial<ModelAttributes<InstanceType<typeof User>>>

interface JsonStructure {
  [key: string]: JsonStructure | string[] | any
}

declare module '@japa/api-client' {
  interface ApiRequest {
    /**
     * Authenticate the request with the given user data
     */
    authenticated(userData?: UserData): this
  }

  interface ApiResponse {
    /**
     * Assert response has validation errors on match keys.
     */
    assertInvalid(keys: string[]): this

    /**
     * Assert that the response has a given JSON structure.
     */
    assertJsonStructure(structure: string[] | JsonStructure, responseData?: any): this
  }
}

ApiRequest.macro('authenticated', async function (userData: UserData = {}) {
  if (userData instanceof User) {
    this.loginAs(userData)

    return this
  }

  const user = await UserFactory.merge(userData).create()

  this.loginAs(user)

  return this
})

ApiResponse.macro('assertInvalid', function (keys: string[]) {
  this.ensureHasAssert()

  const { errors } = this.body()

  const errorFields = collect(errors).pluck('field').toArray()

  this.assert?.includeDeepMembers(errorFields, keys)
})

ApiResponse.macro(
  'assertJsonStructure',
  function (structure: JsonStructure | string[], responseData?: any) {
    this.ensureHasAssert()

    responseData ??= this.body()

    if (Array.isArray(structure)) {
      this.assert?.properties(responseData, structure)

      return
    }

    if (typeof structure !== 'object') {
      this.assert?.equal(
        typeof responseData,
        typeof structure,
        `${responseData} should be of type ${typeof structure}`
      )

      return
    }

    Object.entries(structure).forEach(([key, value]) => {
      if (key === '*') {
        this.assert?.isArray(responseData)

        return responseData.forEach((item) => this.assertJsonStructure(value, item))
      }

      this.assert?.property(responseData, key)

      if (Array.isArray(value)) {
        return this.assertJsonStructure(value, responseData[key])
      }

      this.assertJsonStructure(value, responseData[key])
    })
  }
)
