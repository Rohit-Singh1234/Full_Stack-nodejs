
const express = require("express")
const app = express()

const db = require("./database/connection") // const db = require("./database/connection.js") here .js is optional
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


app.get("/books", (req, res) => {
  res.json({
    message : "Book fetched sucessfully"
  })
})


app.post("/books", (req, res) => {
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

postgresql://postgres.cxrnzuqmwnjclsijkcgd:full_st@ck123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres


app.listen(4000, function() {
  console.log("Server is running on port 4000")
})