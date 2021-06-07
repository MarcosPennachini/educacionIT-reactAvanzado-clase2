import 'bootstrap/dist/css/bootstrap.css'
import ProductList from './containers/ProductList';
import store from './store/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <header className="alert alert-danger">
        <h1 className="display-1"><strong>Barba Roja</strong></h1>
        <h2 className="display-6">¡Bienvenidos a nuestra birrería!</h2>
      </header>

      <main>
        <ProductList />
      </main>
    </Provider>
  );
}

export default App;
