
// Database connection code/logic
const {Sequelize, DataTypes} = require("sequelize")

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.cxrnzuqmwnjclsijkcgd:full_st@ck123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")
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