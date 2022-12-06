import React, { useContext, useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import prcontext from '../Context/Productcontext'

export default function Products() {

  const { product } = useContext(prcontext)
  // console.log(product)
  return (
    <>
      <div>
        <section className="section-background">
          <div className="container">
            <div className="row">
              {product && product.map((item) =>
                <div className="col-md-4 col-sm-4">
                  <div className="courses-thumb courses-thumb-secondary">
                    <div className="courses-top">
                      <div className="courses-image productck">

                        <img src={item.images} className="img-responsive" alt />
                        <LinkContainer to={`/SingleProduct/${item.id}`}>
                          <div className='eyes'>
                            <a ><i class="fa-solid fa-eye"></i></a>
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
              )}
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="footer-info">
                  <div className="section-title">
                    <h2>Headquarter</h2>
                  </div>
                  <address>
                    <p>212 Barrington Court <br />New York, ABC 10001</p>
                  </address>
                  <ul className="social-icon">
                    <li><a href="#" className="fa fa-facebook-square" attr="facebook icon" /></li>
                    <li><a href="#" className="fa fa-twitter" /></li>
                    <li><a href="#" className="fa fa-instagram" /></li>
                  </ul>
                  <div className="copyright-text">
                    <p>Copyright © 2020 Company Name</p>
                    <p>Template by: <a href="https://www.phpjabbers.com/">PHPJabbers.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-info">
                  <div className="section-title">
                    <h2>Contact Info</h2>
                  </div>
                  <address>
                    <p>+1 333 4040 5566</p>
                    <p><a href="mailto:contact@company.com">contact@company.com</a></p>
                  </address>
                  <div className="footer_menu">
                    <h2>Quick Links</h2>
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="terms.html">Terms &amp; Conditions</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="footer-info newsletter-form">
                  <div className="section-title">
                    <h2>Newsletter Signup</h2>
                  </div>
                  <div>
                    <div className="form-group">
                      <form action="#" method="get">
                        <input type="email" className="form-control" placeholder="Enter your email" name="email" id="email" required />
                        <input type="submit" className="form-control" name="submit" id="form-submit" defaultValue="Send me" />
                      </form>
                      <span><sup>*</sup> Please note - we do not spam your email.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>

    </>
  )
}
