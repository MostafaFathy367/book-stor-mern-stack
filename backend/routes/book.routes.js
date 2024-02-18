import express from 'express';
import { getBooks, createBook, getSingleBook, updateBook, deleteBook } from '../controllers/book.controller.js'; 

const router = express.Router();

router.get('/', getBooks)
router.get('/:id', getSingleBook)
router.post('/', createBook);
router.patch('/:id', updateBook)
router.delete('/:id', deleteBook);


export default router;

