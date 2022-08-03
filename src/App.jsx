import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/Item/ItemDetail/ItemDetailContainer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './contexts/CartContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer title = {'Tienda'}/>} />
            <Route path="/category/:name" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>} />

            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
