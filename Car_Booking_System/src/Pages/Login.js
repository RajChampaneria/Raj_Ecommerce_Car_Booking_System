import React, { useState } from 'react'
import { json, Navigate, useNavigate } from 'react-router';
import Register from './Register';

export default function Login() {

    // const [username, Setusername] = useState('')
    // const [password, Setpassword] = useState('')
    const navigate = useNavigate()
   const [data,Setdata]=useState({uname:"",password:""})

     const onchange=(e)=>{
        Setdata({...data,[e.target.name]:e.target.value})
     }

    const HandleLogin = (e) => {
        {
            e.preventDefault()
            console.log(data);      
            fetch("http://localhost:3004/users")
                .then((response) => response.json())
                .then((result) => {
                    result.filter((item) => {
                        if (item.uname === data.username) {
                            if (item.password ===data.password) {
                                if (item.role_id == 1) {
                                    localStorage.setItem('admin', JSON.stringify(item))
                                    navigate('/')
                                }
                                else {
                                    localStorage.setItem('user', JSON.stringify(item))
                                    navigate('/')

                                }
                            }
                            else {
                                console.log("password do not match")

                            }

                        }
                        else {
                            console.log("username does not match")

                        }
                        // navigate('/Home')
                    })
                })

        }
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={HandleLogin}>
                        <span className="login100-form-title p-b-43">
                            Login to continue
                        </span>
                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="text" name="username"
                                onChange={onchange} />
                            <span className="focus-input100" />
                            <span className="label-input100">Username</span>
                        </div>
                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="password" name="password" onChange={onchange} />
                            <span className="focus-input100" />
                            <span className="label-input100">Password</span>
                        </div>
                        <div className="flex-sb-m w-full p-t-3 p-b-32">
                            <div className="contact100-form-checkbox">
                                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                <label className="label-checkbox100" htmlFor="ckb1">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="#" className="txt1">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>
                        <div className="text-center p-t-46 p-b-20">
                            <span className="txt2">
                                or sign up using
                            </span>
                        </div>
                        <div className="login100-form-social flex-c-m">
                            <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                        </div>
                    </form>
                    <div className="login100-more" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                    </div>
                </div>
            </div>
        </div>

    )
}
