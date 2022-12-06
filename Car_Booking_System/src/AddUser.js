import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'



export default function AddUser() {
    const [uname, Setuname] = useState()
    const [contact, Setcontact] = useState()
    const [password,Setpassword ] = useState()
    const [conpass,Setconpass]=useState()
    const navigate = useNavigate('')
    


    const HandleSignUp = (e) => {
        e.preventDefault()
        const data = { uname,contact,password,conpass}

        fetch("http://localhost:3004/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        })
            .then((Response) => Response.json())
            .then((json) => {

                navigate('/Userinfo')

            })
    }




    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={HandleSignUp} >
                        <span className="login100-form-title p-b-43">
                            Register to continue
                        </span>
                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="text" name="uname" onChange={(e)=>Setuname(e.target.value)} />
                            <span className="focus-input100" />
                            <span className="label-input100">Enter New Username</span>
                        </div>

                        <div className="wrap-input100 validate-input " >
                            <input className="input100" type="text" name="contact" onChange={(e)=>Setcontact(e.target.value)}/>

                            <span className="focus-input100" />
                            <span className="label-input100">Enter Contact Number</span>
                        </div>

                        <div className="wrap-input100 validate-input " >
                            <input className="input100" type="text" name="password" onChange={(e)=>Setpassword(e.target.value)}/>

                            <span className="focus-input100" />
                            <span className="label-input100">Enter Password</span>
                        </div>

                        <div className="wrap-input100 validate-input" >
                            <input className="input100" type="password" name="conpass" id="conpass" onChange={(e)=>Setconpass(e.target.value)}/>
                            <span className="focus-input100" />
                            <span className="label-input100" htmlFor="conpass">Enter Confirm Password</span>

                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" > Register</button>
                        </div>

                    </form>
                    <div className="login100-more" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                    </div>
                </div>
            </div>
        </div>
    )

}