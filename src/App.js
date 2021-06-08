import 'bootstrap/dist/css/bootstrap.css'
import ProductList from './containers/ProductList';
import store from './store/store';
import {Provider} from 'react-redux'
import FetchProducts from './containers/FetchProducts';
import Loading from './containers/Loading';

function App() {
  return (
    <Provider store={store}>
      <header className="bg-dark text-white px-4 py-5 text-center">
        <h1 className="display-2 fw-bold">Barba Roja</h1>
        <p className="lead mb-4">¡Bienvenidos a nuestra birrería!</p>
      </header>

      <main className="py-5">
        <Loading />
        <FetchProducts />
        <ProductList />
      </main>
    </Provider>
  );
}

export default App;
