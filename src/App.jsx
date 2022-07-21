import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/Item/ItemDetail/ItemDetailContainer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer title = {'Tienda'}/>} />
        <Route path="/category/:name" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
