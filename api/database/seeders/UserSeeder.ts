import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.firstOrCreate({
      name: 'Coodesh User',
      email: 'coodesh@email.com',
      password: '12345678',
    })
  }
}
