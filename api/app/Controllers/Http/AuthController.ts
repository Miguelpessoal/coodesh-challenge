import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const { email, password } = request.only(['email', 'password'])
      const token = await auth.use('api').attempt(email, password)

      return token.toJSON()
    } catch {
      return response.unauthorized('E-mail ou senha inválidos.')
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').logout()

    return response.json({ message: 'Logout success' })
  }
}
