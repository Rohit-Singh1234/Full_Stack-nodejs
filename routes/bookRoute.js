const { fetchBooks, addBook,deleteBook, editBook , singleFetchBook} = require("../controllers/bookController")
const { books } = require("../database/connection")

const router = require("express").Router()

router.route("/books").get(fetchBooks).post(addBook)
router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)
// router.get("/books",fetchBooks)
// router.post("/books",addBook)
// router.delete("/books/:id",deleteBook)


module.exports = router