import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/Item/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      {/*<ItemListContainer title = {'Camisetas'}/>*/}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
