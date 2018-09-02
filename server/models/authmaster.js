module.exports = function (sequelize, Sequelize) {
  var Auth = sequelize.define('authmaster', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  return Auth
}
