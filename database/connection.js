
// Database connection code/logic
const {Sequelize, DataTypes} = require("sequelize")

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize(process.env.connection_string)
sequelize.authenticate()
  .then(() => {
    console.log("Database connected successfully")
  })
  .catch((err) => {
    console.error("Unable to connect to the database:",err)
  })

//   const info = {}
//   info.name = "Rohit Singh"
//   info.age = 22
//   info.address = "Nepal"

// const info = {
//   name: "Rohit Singh",
//   age: 22,
//   address: "Nepal"
// }

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

// const db = {
//     Sequelize: Sequelize,
//     sequelize: sequelize
// }

module.exports = db