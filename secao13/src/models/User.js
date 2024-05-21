import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs'

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo NOME deve ter entre 3 a 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe.'
        },
        validate: {
          isEmail: {
            msg: 'Email inválido.',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'O campo SENHA deve ter entre 6 a 50 caracteres.',
          },
        },
      },
    }, {
      sequelize
    })

    this.addHook('beforeSave', async (user) => { // gerando o hash da senha e salvando em user.password_hash
      user.password_hash = await bcryptjs.hash(user.password, 8)
    })

    return this
  }
}