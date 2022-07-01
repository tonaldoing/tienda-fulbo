import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer title = {'Camisetas'}/>
      <ItemListContainer title = {'Ropa de Fulbo'}/>
      <ItemListContainer title = {'Accesorios'}/>
    </>
  );
}

export default App;
