
const express = require("express")
const app = express()
const {books} = require("./database/connection") // const {books} = require("./database/connection.js") here .js is optional
const db = require("./database/connection") // const db = require("./database/connection.js") here .js is optional
app.use(express.json()) // to parse JSON data in request body
/*

// let app = require("express")()
app.get("/", (req, res) => {
  res.json({
    "name": "Rohit Singh",
    "address" : "Nepal"
  })
})
app.get("/Home", (req, res) => {
    res.send("<h1 text=aqua align=center>You are in home page!</h1>")
  })
  

  app.post("/register", (req, res) => {
    res.json({
      "name": "Rohit Singh",
      "address" : "Nepal",
      status: "success"
    })

  })




app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
*/


app.get("/books", async (req, res) => {
  const datas = await books.findAll()
  res.json({
    message : "Book fetched sucessfully",
    datas // datas : datas
  })
})


app.post("/books", async (req, res) => {
  const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
  await books.create({
    bookName,// bookName : bookName,
    bookPrice,// bookPrice : bookPrice,
    bookAuthor,// bookAuthor : bookAuthor,
    bookGenre// bookGenre : bookGenre
  }).then(() => {
    console.log("Book added successfully")
  }).catch((err) => {
    console.log(err)
  })
  // const bookName = req.body.bookName
  // const bookPrice = req.body.bookPrice
  res.json({
    message : "Book added sucessfully"
  })
})


app.delete("/books/:id", (req, res) => {
  res.json({
    message : "Book deleted sucessfully"
  })
})


app.patch("/books/:id", (req, res) => {
  res.json({
    message : "Book updated sucessfully"
  })
})

process.env.connection_string

app.listen(4000, function() {
  console.log("Server is running on port 4000")
})