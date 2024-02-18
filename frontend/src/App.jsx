import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBooks from './pages/ShowBooks';
import EditBooks from './pages/EditBooks';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/details/:id' element={<ShowBooks />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/edit/:id' element={<EditBooks />} />
      </Routes>
    </Provider>
  )
}

export default App
