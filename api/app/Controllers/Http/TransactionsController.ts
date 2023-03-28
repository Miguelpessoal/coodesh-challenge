import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Transaction from 'App/Models/Transaction'

import StoreTransactionService from 'App/Services/StoreTransactionService'

import StoreTransactionValidator from 'App/Validators/Transaction/StoreTransactionValidator'

export default class TransactionsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 10

    const transactions = await Transaction.query().paginate(page, limit)

    return transactions
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const { file } = await request.validate(StoreTransactionValidator)
      StoreTransactionService.run(file)

      return response.status(201).json({ message: 'Transações cadastradas!' })
    } catch {
      return response.status(422).json({ message: 'Erro ao cadastrar.' })
    }
  }
}
