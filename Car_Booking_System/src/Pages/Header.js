import React from 'react'
import { NavLink } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

export default function Header(props) {
    const navigate = useNavigate()
    const detail = JSON.parse(localStorage.getItem('user'))


    const data1="AAA"
    const data2="BBB"
    const data3="CCC"


    const HandleLogout = (e) => {
        e.preventDefault();
        if (localStorage.getItem('admin')) {
            localStorage.removeItem('admin')
            navigate('/Login')
        }
        else {
            localStorage.removeItem('user')
            navigate('/Login')
        }
    }
    return (
        <>
            <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
                <div className="container-fluid raj">
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon icon-bar" />
                            <span className="icon icon-bar" />
                            <span className="icon icon-bar" />
                        </button>

                        <a href="#" className="navbar-brand "><i className="fa-solid fa-car"></i></a>
                        <span className='navbar-brand '>Car Rental</span>
                    </div>



                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-nav-first">
                            {
                                localStorage.getItem('admin') ?
                                    <>

                                        Hello-admin

                                        <LinkContainer to="/">
                                            <li><a href="">Home</a></li>
                                        </LinkContainer>


                                        <LinkContainer to="Updateproducts">
                                            <li><a href="" >Update Product</a></li>
                                        </LinkContainer>
                                        <LinkContainer to="UserInfo">
                                            <li><a href="" >Users Information </a></li>
                                        </LinkContainer>
                                        <LinkContainer to="Login">
                                            <li><a href="" onClick={HandleLogout}>Logout</a></li>
                                        </LinkContainer>
                                    </>
                                    : localStorage.getItem('user') ?
                                        <>
                                            <li >
                                                <a className="nav-link" href="#">Hello-{detail.uname} </a>
                                            </li>
                                            <LinkContainer to="/">
                                                <li><a href="">Home</a></li>
                                            </LinkContainer>
                                            <LinkContainer to="Products">
                                                <li><a href="fleet.html">Products</a></li>
                                            </LinkContainer>
                                            <li><a href="offers.html">Offers</a></li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category<span className="caret" /></a>
                                                <ul className="dropdown-menu">
                                                        <li><Link to="/category/A" onClick={()=>{props.name(data1)}}>A segments </Link></li>
                                                        <li><Link to="/category/B" onClick={()=>{props.name(data2)}}>B segments </Link></li>
                                                        <li><Link to="/category/C" onClick={()=>{props.name(data3)}}>C segments </Link></li>
                                                    
                                                </ul>

                                            </li>
                                            <LinkContainer to="Login">
                                                <li><a href="" onClick={HandleLogout}>Logout</a></li>
                                            </LinkContainer>
                                        </>
                                        :
                                        <>


                                            <LinkContainer to="/">
                                                <li><a href="">Home</a></li>
                                            </LinkContainer>
                                            <LinkContainer to="Products">
                                                <li><a href="fleet.html">Products</a></li>
                                            </LinkContainer>

                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About<span className="caret" /></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="blog-posts.html">Blog</a></li>
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="testimonials.html">Testimonials</a></li>
                                                    <li><a href="terms.html">Terms</a></li>
                                                </ul>

                                            </li>


                                            <LinkContainer to="Login">
                                                <li><a href="">Login</a></li>
                                            </LinkContainer>
                                            <LinkContainer to="Register">
                                                <li><a href="">Register</a></li>
                                            </LinkContainer>
                                        </>
                            }




                        </ul>
                    </div>
                </div>
            </section>
        </>

    )
}
