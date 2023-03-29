import Transaction from 'App/Models/Transaction'

export default class TotalTransactionsController {
  public async index() {
    const entryValue = await Transaction.query().where('type', '!=', 3).sum('value as value')
    const exitValue = await Transaction.query().where('type', 3).sum('value as value')

    const totalTransactionsValue = (entryValue[0].value - exitValue[0].value) / 100

    return totalTransactionsValue
  }
}
