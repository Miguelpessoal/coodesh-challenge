import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const payload = request.only(['name', 'email', 'password'])

    const userExists = await User.findBy('email', payload.email)

    if (userExists) {
      return response.status(422).json('Email já cadastrado.')
    }

    const user = await User.create(payload)

    return response.created(user)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    const payload = request.only(['name', 'email', 'password'])

    user.merge(payload)

    await user.save()

    return response.ok(user)
  }
}
