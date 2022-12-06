
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartcontextt } from '../Context/Cartadd'

export default function AddToCart() {
  const { ...state } = useCartcontextt()
  const { removeitem } = useCartcontextt()
  const { removecart ,cart_amount,shipping_fee,price} = useCartcontextt()

  const { cart } = state
  console.log(cart, "cart context")

  if(cart.length===0){
    return <div>
      <h3>
        There is no data in yout Cart
      </h3>
    </div>
  }
  return (
    <>

      <section className="h-100 h-custom">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="table-responsive">

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className='text-center '>Product image</th>
                      <th scope="col " className='text-center ' >Name</th>
                      {/* <th scope="col">Quantity</th> */}
                      <th scope="col  " className='text-center '>Price</th>
                      <th scope="col text-center ta" className='text-center '>Remove</th>

                    </tr>
                  </thead>
                  <tbody>
                    {cart && cart.map((item) => {
                      return <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center"  >
                            <img src={item.images} className="img-fluid rounded-3" style={{ width: 120 }} alt="Book" />
                            <div className="flex-column">
                              <p className="mb-">{item.company}</p>
                              <p className="mb-">{item.category}</p>

                              <p className="mb-0"></p>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">
                          <p className="mb-0" style={{ fontWeight: 500 }}>{item.name}</p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{ fontWeight: 500 }}>{item.price}</p>
                        </td>
                        <td className="align-middle">
                          <button className='btn btn-warning' onClick={() => {
                            removeitem(item.id)
                            console.log(item.id)
                          }
                          }>Remove</button>

                        </td>
                      </tr>

                    })}

                  </tbody>
                </table>
                <div className='cart-btns '>
                    <LinkContainer to="/Products">
                  <button className='btn brn-lg btn-primary'>Continue Shopping</button>

                    </LinkContainer>
                  <button className='btn brn-lg btn-danger' onClick={removecart}>Clear Cart</button>

                </div>
                <div className='subtotal'>
                  <h5>Shpping fee:{shipping_fee } </h5>
                  {console.log(shipping_fee,"kkkkkkkkkkkk")}
                  {console.log(cart[0].price)}

                </div>

                <div className='subtotal'>
                  <h5>Your Total Value Is:{cart_amount + shipping_fee}</h5>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}



