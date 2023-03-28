import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import StoreTransactionService from 'App/Services/StoreTransactionService'

import StoreTransactionValidator from 'App/Validators/Transaction/StoreTransactionValidator'

export default class TransactionsController {
  public async store({ response, request }: HttpContextContract) {
    try {
      const { file } = await request.validate(StoreTransactionValidator)
      StoreTransactionService.run(file)

      return response.status(201).json({ message: 'Transações cadastradas!' })
    } catch {
      return response.status(422).json('E-mail ou senha inválidos.')
    }
  }
}
