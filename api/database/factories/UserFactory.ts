import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(User, ({ faker }) => {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(20, false, /[a-z]|[A-Z]|[0-9]|[a-zA-Z0-9]|[#?!@$%^&*-]/),
  }
}).build()
