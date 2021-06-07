import {takeEvery, put, call, delay} from 'redux-saga/effects'
import { REQUEST_PRODUCTS, RESPONSE_PRODUCTS } from '../action/action-types'
import axios from 'axios'

function* requestProductos(action){
    console.log('Llegó la acción REQUEST_PRODUCTS') 
    const response = yield call(axios.get, 'http://localhost:3001/products');
    yield delay(2000);
    yield put({
        type: RESPONSE_PRODUCTS,
        payload: response.data
    })
}

export function* sagaMain(){
    yield takeEvery(REQUEST_PRODUCTS, requestProductos)
}