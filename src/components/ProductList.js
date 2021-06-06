import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const ProductList = ({articulos}) => {
    return (
        <section className="container">
            <div className="section">
                {
                    articulos.map( (item) => {
                        <div key={item.id} className="card col-md-3 m-1">
                            <img src={item.image} alt="card-image" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="class-text">{item.description}</p>
                                <button className="btn btn-primary">Comprar ${item.price}</button>
                            </div>
                        </div>
                    })
                }
            </div>  
        </section>
    )
}

export default ProductList
