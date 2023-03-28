import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreTransactionService from 'App/Services/StoreTransactionService'

export default class TransactionsController {
  public async store({ response }: HttpContextContract) {
    try {
      StoreTransactionService.run()

      return response.status(201).json({ message: 'Transações cadastradas!' })
    } catch {
      return response.status(422).json('E-mail ou senha inválidos.')
    }
  }
}
