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

  exports.deleteBook = async (req, res) => {
    const id = req.params.id
    await books.destroy({
      where : {
        id : id
      }
    });
    res.json({
      message : "Book deleted sucessfully"
    });
  }

  exports.editBook = async (req, res) => {
  try{
    const id = req.params.id
    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await books.update({
      bookName,// bookName : bookName,
      bookPrice,// bookPrice : bookPrice,
      bookAuthor,// bookAuthor : bookAuthor,
      bookGenre// bookGenre : bookGenre
    }, {
      where : {
        id : id
      }
    })
    // await books.update({
    //   bookName : req.body.bookName,
    //   bookPrice : req.body.bookPrice,
    //   bookAuthor : req.body.bookAuthor,
    //   bookGenre : req.body.bookGenre
    // }, {
    //   where : {
    //     id : id
    //   }
    // })
  
    res.json({
      message : "Book updated sucessfully"
    })
  }catch(err){
    console.log(err)
    res.status(500).json({
      message : "Error updating book",
      error : err.message
    })
  }

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