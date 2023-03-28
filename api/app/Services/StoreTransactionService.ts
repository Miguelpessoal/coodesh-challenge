import Transaction from 'App/Models/Transaction'
import { MultipartFileContract } from '@ioc:Adonis/Core/BodyParser'

export default class {
  public static async run(file: MultipartFileContract) {
    const fs = require('fs')
    const readLine = require('readline')

    const data = readLine.createInterface({
      input: fs.createReadStream(file.tmpPath),
    })

    const payload: Object[] = []

    data.on('line', (line: string) => {
      payload.push({
        type: Number(line.substring(0, 1)),
        date: line.substring(1, 26),
        product: line.substring(26, 56),
        value: line.substring(56, 66),
        seller: line.substring(66, 86),
      })

      Transaction.createMany(payload)
    })
  }
}
