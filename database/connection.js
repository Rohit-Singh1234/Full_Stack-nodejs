
// Database connection code/logic
const {Sequelize, DataTypes} = require("sequelize")

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes


// const bookModel = require("./models/book.model")(sequelize, DataTypes)


const sequelize = new Sequelize(process.env.connection_string)
sequelize.authenticate()
  .then(() => {
    console.log("Database connected successfully")
  })
  .catch((err) => {
    console.error("Unable to connect to the database:",err)
  })


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

// const db = {
//     Sequelize: Sequelize,
//     sequelize: sequelize
// }

db.books = require("./models/book.model")(sequelize, DataTypes)
db.users = require("./models/user.model")(sequelize, DataTypes)
db.products = require("./models/product.model")(sequelize, DataTypes)

// Code to Migrate the database
// sequelize.sync({force: false}).then(() => {
//     console.log("Database & tables created!")
// })

sequelize.sync({alter: false}).then(() => {
  console.log("Database & tables created!")
})

module.exports = db