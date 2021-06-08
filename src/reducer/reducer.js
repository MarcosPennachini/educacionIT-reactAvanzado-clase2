import { BEGIN_LOAD, END_LOAD, RESPONSE_PRODUCTS } from "../action/action-types";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case RESPONSE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        
        case BEGIN_LOAD:
            return {
                ...state,
                loading: true
            }
        case END_LOAD:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;