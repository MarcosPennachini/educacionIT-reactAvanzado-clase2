import {connect} from 'react-redux'
import Loading from '../components/Loading'

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Loading)