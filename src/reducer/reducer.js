import { RESPONSE_PRODUCTS } from "../action/action-types";

const reducer = (state, action) => {
    switch (action.type) {
        case RESPONSE_PRODUCTS:
            return {
                productos: [
                    ...state.productos,
                    ...action.productos
                ]
            }
    
        default:
            return state;
    }
}

export default reducer;