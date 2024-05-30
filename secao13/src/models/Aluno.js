import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.'
          }
        }
      },

      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.'
          }
        }
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          msg: 'Email já existe.'
        },
        isEmail: {
          msg: 'Email inválido.'
        }
      },

      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        isInt: {
          msg: 'A idade precisa ser um número.'
        }
      },

      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
        isFloat: {
          msg: 'O peso precisa ser um número.'
        }
      },

      altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
        isFloat: {
          msg: 'A altura precisa ser um número.'
        }
      }
    }, {
      sequelize
    })
    return this
  }
}
