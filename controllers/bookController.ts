const bookService = require("../services/bookService");

const createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.findAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getBookById = async (req, res) => {
    try {
       const book = await bookService.findBookById(req.params.bookId);
       res.status(200).json(book);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await bookService.deleteBook(req.params.bookId);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {createBook, getAllBooks, getBookById, deleteBook}