import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const ProductList = ({articulos}) => {
    return (
        <section className="container-fluid">
            <div className="row d-flex justify-content-around">
                {
                    articulos.map( (item) => { 
                        return <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card">
                                <img src={item.image} alt="card" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="class-text">{item.description}</p>
                                    <button className="btn btn-primary">Comprar ${item.price}</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>  
        </section>
    )
}

export default ProductList
