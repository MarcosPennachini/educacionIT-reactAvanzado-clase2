# Clase 2 - React Avanzado | EducacionIT

---

# Redux-saga

Notas sobre como implementar redux-saga en una app de render de cards, fetcheadas con **Axios**.

## Instalación

1. Tener instalada la librería redux y react-redux en nuestro proyecto:
   ```npm
   npm i --save redux react-redux
   ```
2. Instalar la librería de redux-saga:
   ```npm
   npm i redux-saga
   ```

### En el store:

```javascript
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer/reducer';
import { sagaMain } from '../sagas/saga';
import createSagaMiddleware from 'redux-saga';
```

```javascript
const sagaMiddleware = createSagaMiddleware();
export default createStore(reducer, storeData, applyMiddleware(sagaMiddleware));
//Donde store-data es la data inicial que usamos en el store
sagaMiddleware.run(sagaMain);
```

Recordamos que para habilitar la extensión de redux-devTools en el navegador, debemos incluir el siguiente código como parámetro de la función `createStore`.

```javascript
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
```

Si necesitamos, como en este caso, agregar un middleware y utilizar la consola de redux, podemos usar una función compose

```javascript
//Importamos la función desde redux
import { compose } from 'redux';

const composeEnhancer = compose(applyMiddleware(sagaMiddleware), reduxDevTools);
//Exportamos el store
export default createStore(reducer, defaultData, composedEnhancer);
```

## Middleware Saga

Creamos el archivo de nuestro middleware saga.

_Podemos crear un directorio dentro de .src con el nombre de "sagas"_.

El mismo capturará acciones antes de que lleguen al reducer, para ejecutar algún código en particular. En este caso el componente encargado de triggerear la renderización de las cards, emite la acción REQUEST*PRODUCTS. El middleware saga la captura, realiza un fetch a una url mediante **Axios**, y despacha un objeto acción con \_type* RESPONSE*PRODUCTS, en la cual su \_payload* contiene la lista de cards obtenidas de la llamada a la url.

Primero los imports:

```javascript
//Efectos de redux-saga
import { takeEvery, put, call, delay } from 'redux-saga/effects';
//Action-types
import {
  BEGIN_LOAD,
  END_LOAD,
  REQUEST_PRODUCTS,
  RESPONSE_PRODUCTS,
} from '../action/action-types';
//Librería Axios para llamadas asincrónicas a urls
import axios from 'axios';
```

Cuerpo del middleware saga:

```javascript
function* requestProductos(action) {
  //Despacha un Action-type que en el reducer setea campo loading: true en el store
  yield put({ type: BEGIN_LOAD });
  //Llamada get a url
  const response = yield call(axios.get, 'http://localhost:3001/products');
  //Delay
  yield delay(2000);
  //Despacha la action RESPONSE_PRODUCTS al reducer
  yield put({ type: RESPONSE_PRODUCTS, payload: response.data });
  //Despacha el action. En el reducer setea campo loading: false
  yield put({ type: END_LOAD });
}

export function* sagaMain() {
  //Captura acción y ejecuta función requestProductos
  yield takeEvery(REQUEST_PRODUCTS, requestProductos);
}
```
