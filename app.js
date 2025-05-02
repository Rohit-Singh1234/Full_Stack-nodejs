
const express = require("express")
const app = express()
const db = require("./database/connection") 
// const db = require("./database/connection.js") here .js is optional
app.use(express.json()) // to parse JSON data in request body
const bookRoute = require("./routes/bookRoute")



app.use("/api", bookRoute)

process.env.connection_string

app.listen(4000, function() {
  console.log("Server is running on port 4000")
})