import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import prcontext from '../Context/Productcontext'


export default function CategoryProduct(props) {
    const { product } = useContext(prcontext)
    // console.log

    console.log(props.name)
    return (
        <>
            {
                props.name === "AAA" ?
                    <>
                        <h1>A category </h1>
                        <section className="section-background">
                            <div className="container">
                                <div className="row">
                                    {product && product.map((item) => {
                                        return item.category === "A" ?
                                            <>

                                                {/* <h2>Categoty {item.category} Wise Products</h2> */}

                                                <div className="col-md-4 col-sm-4">
                                                    <div className="courses-thumb courses-thumb-secondary">
                                                        <div className="courses-top">
                                                            <div className="courses-image productck">

                                                                <img src={item.images} className="img-responsive" alt />
                                                                <LinkContainer to={`/SingleProduct/${item.id}`}>
                                                                    <div className='eyes'>
                                                                        <a href=""><i class="fa-solid fa-eye"></i></a>
                                                                    </div>
                                                                </LinkContainer>

                                                            </div>
                                                        </div>
                                                        <div className="courses-detail">
                                                            <h3><a href="#" >{item.company}&nbsp;&nbsp;{item.name}</a></h3>
                                                            {/* <p className="lead"><small>from</small> <strong>{item.price}</strong> <small>per weekend</small></p> */}
                                                            <p className="lead"><strong>Model:-{item.model}</strong></p>
                                                            {/* <p>{item.description}</p> */}
                                                        </div>
                                                        <div className="courses-info">
                                                            {/* <button type="button" data-toggle="modal" data-target=".bs-example-modal" className="section-btn btn btn-primary btn-block">Book Now</button> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </> :
                                            null

                                    }
                                    )}
                                </div>
                            </div>
                        </section>
                    </>
                    :
                    (props.name === "CCC" ?
                        <>
                            <h1>C Category</h1>
                            <section className="section-background">
                                <div className="container">
                                    <div className="row">
                                        {product && product.map((item) => {
                                            return item.category === "C" ?
                                                <>

                                                    <div className="col-md-4 col-sm-4">
                                                        <div className="courses-thumb courses-thumb-secondary">
                                                            <div className="courses-top">
                                                                <div className="courses-image productck">

                                                                    <img src={item.images} className="img-responsive" alt />
                                                                    <LinkContainer to={`/SingleProduct/${item.id}`}>
                                                                        <div className='eyes'>
                                                                            <a href=""><i class="fa-solid fa-eye"></i></a>
                                                                        </div>
                                                                    </LinkContainer>

                                                                </div>
                                                            </div>
                                                            <div className="courses-detail">
                                                                <h3><a href="#" >{item.company}&nbsp;&nbsp;{item.name}</a></h3>
                                                                {/* <p className="lead"><small>from</small> <strong>{item.price}</strong> <small>per weekend</small></p> */}
                                                                <p className="lead"><strong>Model:-{item.model}</strong></p>
                                                                {/* <p>{item.description}</p> */}
                                                            </div>
                                                            <div className="courses-info">
                                                                {/* <button type="button" data-toggle="modal" data-target=".bs-example-modal" className="section-btn btn btn-primary btn-block">Book Now</button> */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                                :
                                                null

                                        }
                                        )}
                                    </div>
                                </div>
                            </section>
                        </>
                        :

                        (props.name === "BBB" ?
                            <>
                                <h1>B category</h1>
                                <section className="section-background">
                                    <div className="container">
                                        <div className="row">
                                            {product && product.map((item) => {
                                                return item.category === "B" ?
                                                    <>

                                                        <div className="col-md-4 col-sm-4">
                                                            <div className="courses-thumb courses-thumb-secondary">
                                                                <div className="courses-top">
                                                                    <div className="courses-image productck">

                                                                        <img src={item.images} className="img-responsive" alt />
                                                                        <LinkContainer to={`/SingleProduct/${item.id}`}>
                                                                            <div className='eyes'>
                                                                                <a href=""><i class="fa-solid fa-eye"></i></a>
                                                                            </div>
                                                                        </LinkContainer>

                                                                    </div>
                                                                </div>
                                                                <div className="courses-detail">
                                                                    <h3><a href="#" >{item.company}&nbsp;&nbsp;{item.name}</a></h3>
                                                                    {/* <p className="lead"><small>from</small> <strong>{item.price}</strong> <small>per weekend</small></p> */}
                                                                    <p className="lead"><strong>Model:-{item.model}</strong></p>
                                                                    {/* <p>{item.description}</p> */}
                                                                </div>
                                                                <div className="courses-info">
                                                                    {/* <button type="button" data-toggle="modal" data-target=".bs-example-modal" className="section-btn btn btn-primary btn-block">Book Now</button> */}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </> :
                                                    null

                                            }
                                            )}
                                        </div>
                                    </div>
                                </section>
                            </>
                            :
                            null

                        )

                    )


            }
        </>
    )
}
