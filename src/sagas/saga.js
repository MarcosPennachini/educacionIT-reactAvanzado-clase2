import {takeEvery, put, call, delay} from 'redux-saga/effects'
import { BEGIN_LOAD, END_LOAD, REQUEST_PRODUCTS, RESPONSE_PRODUCTS } from '../action/action-types'
import axios from 'axios'

function* requestProductos(action){
    console.log('Llegó la acción REQUEST_PRODUCTS') 
    yield put({ type: BEGIN_LOAD });
    const response = yield call(axios.get, 'http://localhost:3001/products');
    yield delay(2000);
    yield put({
        type: RESPONSE_PRODUCTS,
        payload: response.data
    })
    yield put({ type: END_LOAD });
}

export function* sagaMain(){
    yield takeEvery(REQUEST_PRODUCTS, requestProductos)
}