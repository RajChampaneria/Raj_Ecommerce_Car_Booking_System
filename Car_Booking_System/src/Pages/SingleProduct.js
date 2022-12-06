import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
// import Products from './Products'
import { Link } from 'react-router-dom'
import { useCartcontextt } from '../Context/Cartadd'

export default function SingleProduct() {
  const {addprdtocart}=useCartcontextt()


  const { id } = useParams()
  // console.log(id)
  const [Product, SetProduct] = useState("")

  const {ccc}=useCartcontextt()
  console.log(ccc,"value from context")
  console.log(ccc,"value from context")


  useEffect(() => {
    fetch(`http://localhost:3004/products/${id}`)
      .then((result) => result.json())
      .then((data) => {
        SetProduct(data)
      })
  }, [])


  return (
    <>
      <main className="container spcontainer">

        <div className="left-column">
          {/* <img data-image="black" src={Product.images} alt></img> */}
          <img data-image="red" src={Product.images1} alt></img>
          <img data-image="blue" src={Product.images} alt></img>
        </div>

        <div className="right-column">

          <div className="product-description">
            <span>{Product.company}</span>
            <h1>{Product.name}</h1>
            <p>{Product.description}</p>
          </div>

          <div className="product-configuration">
            {/* Product Color */}
            <div className="product-color">
              <span>Color</span>
              <div className="color-choose">
                <div>
                  <input data-image="red" type="radio" id="red" name="color" defaultValue="red" />
                  <label htmlFor="red"><span /></label>
                </div>
                <div>
                  <input data-image="blue" type="radio" id="blue" name="color" defaultValue="blue" />
                  <label htmlFor="blue"><span /></label>
                </div>
                <div>
                  <input data-image="black" type="radio" id="black" name="color" defaultValue="black" />
                  <label htmlFor="black"><span /></label>
                </div>
              </div>
            </div>

          </div>
          {/* Product Pricing */}
          <div className="product-price ">
            <span className="c">{Product.price}</span>
            {
              localStorage.getItem('user') ?
                <>
                  <Link to="/AddToCart" onClick={()=>{addprdtocart(id,Product)}}>
                    Add to cart
                    </Link>
                </>
                :
                <>
                  <LinkContainer to="/Login">
                    <a href="#" className="cart-btn">
                      Add to cart</a>
                  </LinkContainer>
                </>}

          </div>
        </div>
      </main>

    </>
  )
}
