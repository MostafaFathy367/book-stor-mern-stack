import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks } from '../../../api/requests/books';

const initialState = {
  data: null,
  totalCount: 0,
  isLoading: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await getBooks({page: 1, limit: 10})
  return response.data.data
  
})

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooksList: state => {
      state.isLoading = true;
    },
    getBooksListSuccess: (state, action) => {
      state.data = action.payload.books;
      state.totalCount = action.payload.count;
      state.isLoading = false;
    },
    getBooksListFailed: state => {
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.data = action.payload?.books;
    })
  }
});

const {actions, reducer} = booksSlice;

export const {getBooksList, getBooksListFailed, getBooksListSuccess} = actions;

export default reducer;