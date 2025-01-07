const { Book } = require('../models')

const createBook = async (data): Promise<any> => {
    return await Book.create(data);
}

const findAllBooks = async () : Promise<any> => {
    return await Book.findAll();
}

const findBookById = async (id) : Promise<any> => {
    return await Book.findById(id);
}

const deleteBook = async (id: string) : Promise<any> => {
    try {
        const book = await Book.findByPk(id);

        if (!book) {
            throw new Error('Book not found');
        }

        await book.destroy();
    } catch (error) {
        throw error;
    }
}

module.exports = { createBook, findAllBooks, findBookById, deleteBook };