import React, { useContext } from 'react'
import prcontext from '../Context/Productcontext'
import NewArrial from './NewArrial'

export default function Home() {

const  product=useContext(prcontext)
console.log(product,"Homepage Products...")
  
  return (
    <>

<section id="home">
  <div className="row">
    <div className="owl-carousel owl-theme home-slider">
      <div className="item item-first">
        <div className="caption">
          <div className="container">
            <div className="col-md-6 col-sm-12">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <h3>Voluptas dignissimos esse, explicabo cum fugit eaque, perspiciatis quia ab nisi sapiente delectus eiet.</h3>
              <a href="fleet.html" className="section-btn btn btn-default">Fleet</a>
            </div>
          </div>
        </div>
      </div>
      <div className="item item-second">
        <div className="caption">
          <div className="container">
            <div className="col-md-6 col-sm-12">
              <h1>Distinctio explicabo vero animi culpa facere voluptatem.</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, excepturi.</h3>
              <a href="fleet.html" className="section-btn btn btn-default">Fleet</a>
            </div>
          </div>
        </div>
      </div>
      <div className="item item-third">
        <div className="caption">
          <div className="container">
            <div className="col-md-6 col-sm-12">
              <h1>Efficient Learning Methods</h1>
              <h3>Nam eget sapien vel nibh euismod vulputate in vel nibh. Quisque eu ex eu urna venenatis sollicitudin ut at libero.</h3>
              <a href="fleet.html" className="section-btn btn btn-default">Fleet</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* <main> */}
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="text-center">
            <h2>About us</h2>
            <br />
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestias ipsa veritatis nihil iusto maiores natus dolor, a reiciendis corporis obcaecati ex. Totam assumenda impedit aut eum, illum distinctio saepe explicabo. Consequuntur molestiae similique id quos, quasi quas perferendis laboriosam, fugit natus odit totam! Id dolores saepe, sint debitis rerum dolorem tempora aliquid, pariatur enim nisi. Quia ab iusto assumenda.</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <NewArrial/>

  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="section-title text-center">
            <h2>Latest Blog posts <small>Lorem ipsum dolor sit amet.</small></h2>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="courses-thumb courses-thumb-secondary">
            <div className="courses-top">
              <div className="courses-image">
                <img src="images/blog-1-720x480.jpg" className="img-responsive" alt />
              </div>
              <div className="courses-date">
                <span title="Author"><i className="fa fa-user" /> John Doe</span>
                <span title="Date"><i className="fa fa-calendar" /> 12/06/2020 10:30</span>
                <span title="Views"><i className="fa fa-eye" /> 114</span>
              </div>
            </div>
            <div className="courses-detail">
              <h3><a href="blog-post-details.html">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h3>
            </div>
            <div className="courses-info">
              <a href="blog-post-details.html" className="section-btn btn btn-primary btn-block">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="courses-thumb courses-thumb-secondary">
            <div className="courses-top">
              <div className="courses-image">
                <img src="images/blog-2-720x480.jpg" className="img-responsive" alt />
              </div>
              <div className="courses-date">
                <span title="Author"><i className="fa fa-user" /> John Doe</span>
                <span title="Date"><i className="fa fa-calendar" /> 12/06/2020 10:30</span>
                <span title="Views"><i className="fa fa-eye" /> 114</span>
              </div>
            </div>
            <div className="courses-detail">
              <h3><a href="blog-post-details.html">Tempora molestiae, iste, consequatur unde sint praesentium!</a></h3>
            </div>
            <div className="courses-info">
              <a href="blog-post-details.html" className="section-btn btn btn-primary btn-block">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="courses-thumb courses-thumb-secondary">
            <div className="courses-top">
              <div className="courses-image">
                <img src="images/blog-3-720x480.jpg" className="img-responsive" alt />
              </div>
              <div className="courses-date">
                <span title="Author"><i className="fa fa-user" /> John Doe</span>
                <span title="Date"><i className="fa fa-calendar" /> 12/06/2020 10:30</span>
                <span title="Views"><i className="fa fa-eye" /> 114</span>
              </div>
            </div>
            <div className="courses-detail">
              <h3><a href="blog-post-details.html">A voluptas ratione, error provident distinctio, eaque id officia?</a></h3>
            </div>
            <div className="courses-info">
              <a href="blog-post-details.html" className="section-btn btn btn-primary btn-block">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="testimonial">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="section-title text-center">
            <h2>Testimonials <small>from around the world</small></h2>
          </div>
          <div className="owl-carousel owl-theme owl-client">
            <div className="col-md-4 col-sm-4">
              <div className="item">
                <div className="tst-image">
                  <img src="images/tst-image-1-200x216.jpg" className="img-responsive" alt />
                </div>
                <div className="tst-author">
                  <h4>Jackson</h4>
                  <span>Shopify Developer</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptas, facilis adipisci dolorem exercitationem nemo aut error impedit repudiandae iusto.</p>
                <div className="tst-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="item">
                <div className="tst-image">
                  <img src="images/tst-image-2-200x216.jpg" className="img-responsive" alt />
                </div>
                <div className="tst-author">
                  <h4>Camila</h4>
                  <span>Marketing Manager</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente error, unde eos laborum consequatur officiis perferendis vel debitis, dolore, ipsum quibusdam culpa quisquam, reiciendis aspernatur.</p>
                <div className="tst-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="item">
                <div className="tst-image">
                  <img src="images/tst-image-3-200x216.jpg" className="img-responsive" alt />
                </div>
                <div className="tst-author">
                  <h4>Barbie</h4>
                  <span>Art Director</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum minima autem, reprehenderit mollitia amet id, beatae quo sequi culpa assumenda neque a quisquam, magni.</p>
                <div className="tst-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="item">
                <div className="tst-image">
                  <img src="images/tst-image-4-200x216.jpg" className="img-responsive" alt />
                </div>
                <div className="tst-author">
                  <h4>Andrio</h4>
                  <span>Web Developer</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus culpa laudantium sit dolores quidem at nulla, iure atque laborum! Odit tempora, enim aliquid at modi illum ducimus explicabo soluta.</p>
                <div className="tst-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 

{/* </main> */}


{/* <!-- CONTACT --> */}
<section id="contact">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <form id="contact-form" role="form" action method="post">
          <div className="section-title">
            <h2>Contact us <small>we love conversations. let us talk!</small></h2>
          </div>
          <div className="col-md-12 col-sm-12">
            <input type="text" className="form-control" placeholder="Enter full name" name="name" required />
            <input type="email" className="form-control" placeholder="Enter email address" name="email" required />
            <textarea className="form-control" rows={6} placeholder="Tell us about your message" name="message" required defaultValue={""} />
          </div>
          <div className="col-md-4 col-sm-12">
            <input type="submit" className="form-control" name="send message" defaultValue="Send Message" />
          </div>
        </form>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="contact-image">
          <img src="images/contact-1-600x400.jpg" className="img-responsive" alt="Smiling Two Girls" />
        </div>
      </div>
    </div>
  </div>
</section>
     

{/* <!-- FOOTER --> */}
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

</>
  )
}
