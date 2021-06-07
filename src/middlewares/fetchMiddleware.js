import { REQUEST_PRODUCTS, RESPONSE_PRODUCTS } from "../action/action-types"
import axios from 'axios'


export const fetchMiddleware = state => next => action => {
    if (action.type === REQUEST_PRODUCTS){
        axios.get('http://localhost:3001/products').then(response => {
            next({
                type: RESPONSE_PRODUCTS,
                payload: response.data
            })
            console.log(response.data)
        })
    } else next(action)
}