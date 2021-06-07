import {connect} from 'react-redux'
import { REQUEST_PRODUCTS } from '../action/action-types'
import FetchProducts from '../components/FetchProducts'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {
            dispatch({
                type: REQUEST_PRODUCTS
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(FetchProducts)