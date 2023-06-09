import { test } from '@japa/runner'

import { route } from '../../../helpers/Functions/Router'

import User from 'App/Models/User'

test.group('Users crud spec', (group) => {
  group.transaction()

  test('it should be able to create a new user', async ({ client, assert }) => {
    const data = {
      name: 'John Doe',
      email: 'teste@gmail.com',
      password: 'secret',
    }
    const response = await client.post(route('users.store')).json(data).authenticated()
    const createdUser = await User.query().where('email', data.email).first()

    response.assertStatus(201)
    assert.exists(createdUser)
  })

  test('it should not be able to create a new user with an existing email', async ({
    client,
    assert,
  }) => {
    const data = {
      name: 'John Doe',
      email: 'teste@gmail.com',
      password: 'secret',
    }
    await client.post(route('users.store')).json(data).authenticated()

    const newData = {
      name: 'John New',
      email: 'teste@gmail.com',
      password: 'secret',
    }
    const newResponse = await client.post(route('users.store')).json(newData).authenticated()
    const createdUser = await User.query().where('email', newData.email).first()

    newResponse.assertStatus(422)
    assert.exists(createdUser)
  })
})
