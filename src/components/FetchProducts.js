import React from 'react'

class FetchProducts extends React.Component {
    
    render() { 
        return ( 
            <div className="container-fluid">
                <button 
                    className="btn btn-outline-primary mb-5"
                    onClick={ () => {this.props.fetchProducts()}}
                >
                    Mostrar productos
                </button>
            </div>
         );
    }
}
 
export default FetchProducts;