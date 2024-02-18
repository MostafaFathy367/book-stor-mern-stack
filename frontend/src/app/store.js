import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../pages/books/store/slice';


export default configureStore({
  reducer: {
    books: booksReducer
  }
})