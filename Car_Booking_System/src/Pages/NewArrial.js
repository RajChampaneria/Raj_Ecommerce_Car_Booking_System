import React, { useContext } from 'react'
import prcontext from '../Context/Productcontext'

export default function NewArrial() {

    const { product } = useContext(prcontext);
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title text-center">
                                <h2>New Arrivals <small>Lorem ipsum dolor sit amet.</small></h2>
                            </div>
                        </div>
                        {product && product.map((item) => {

                            return item.display === "true" ? <>

                                <div className="col-md-4 col-sm-6">
                                    <div className="team-thumb">
                                        <div className="team-image">
                                            <img src={item.images} className="img-responsive" alt />
                                        </div>
                                        <div className="team-info">
                                            <h3>{item.name}</h3>
                                            <p className="lead"><small>from</small> <strong>{item.price}</strong> <small>per weekend</small></p>
                                            <span>{item.description}</span>
                                        </div>
                                        <div className="team-thumb-actions">
                                            <a href="offers.html" className="section-btn btn btn-primary btn-block">View Offer</a>
                                        </div>
                                    </div>
                                </div>
                            </> : null
                        })}


                    </div>
                </div>
            </section>

        </>
    )
}
