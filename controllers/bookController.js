const { books } = require("../database/connection")
// const {books} = require("./database/connection.js") here .js is optional

exports.fetchBooks =  async (req, res) => {
  const datas = await books.findAll()
  res.json({
    message : "Book fetched sucessfully",
    datas // datas : datas
  })
}

exports.addBook =  async (req, res) => {
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
  }

  exports.deleteBook =  (req, res) => {
    res.json({
      message : "Book deleted sucessfully"
    })
  }

  exports.editBook =  (req, res) => {
    res.json({
      message : "Book updated sucessfully"
    })
  }

  exports.singleFetchBook =  async (req, res) => {
    const id = req.params.id
    const datas = await books.findByPk(id)
    res.json({
      message : "Single Book fetched sucessfully",
      datas
    })
  }

//   module.exports = {fetchBooks, addBook, deleteBook, editBook }