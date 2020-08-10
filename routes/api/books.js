const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.createBook);

// Matches with "/api/books/id"
router.route("/:id")
    .get(booksController.findById)

module.exports = router;
