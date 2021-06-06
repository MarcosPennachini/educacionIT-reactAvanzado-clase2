import 'bootstrap/dist/css/bootstrap.css'
import ProductList from './components/ProductList';
import {defaultData} from './store/store'

function App() {
  return (
    <>
      <header className="alert alert-danger">
        <h1 className="display-1"><strong>Barba Roja</strong></h1>
        <h2 className="display-6">¡Bienvenidos a nuestra birrería!</h2>
      </header>

      <main>
        <ProductList articulos={defaultData.products}/>
      </main>
    </>
  );
}

export default App;
