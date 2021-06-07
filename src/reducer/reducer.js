import { RESPONSE_PRODUCTS } from "../action/action-types";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case RESPONSE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;