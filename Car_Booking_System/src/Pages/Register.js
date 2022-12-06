import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { useFormik } from 'formik'
import {Signupschema} from './schema/Signupschema'

const initialValues = {
  uname: "",
  contact: "",
  password: "",
  conpass: "",
};

export default function Register() {
  const navigate = useNavigate('')


  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:Signupschema,
    onSubmit: (values) => {
      fetch("http://localhost:3004/users", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      })
        .then((Response) => Response.json())
        .then((json) => {
          navigate('/Login')
        })
    }
  })


return (
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <form className="login100-form validate-form" onSubmit={handleSubmit}>
          <span className="login100-form-title p-b-43">
            Register to continue
          </span>
          <div className="wrap-input100 validate-input" >
            <input className="input100"
              type="text"
              name="uname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.uname} 
            />

            <span className="focus-input100" />
            <span className="label-input100">Enter New Username</span>
            {errors.uname && touched.uname ? (<span style={{color:"red",fontSize:"24px"}}>{errors.uname}</span>):null}
          </div>


          <div className="wrap-input100 validate-input " >
            <input className="input100" type="text" name="contact"  value={values.contact}
              onBlur={handleBlur} onChange={handleChange} />
            <span className="focus-input100" />
            <span className="label-input100">Enter Contact Number</span>
            {errors.contact && touched.contact ? (<span style={{color:"red" }}>{errors.contact}</span>):null}
          </div>
          <div className="wrap-input100 validate-input" >
            <input className="input100" type="password" name="password" id="password" value={values.password}
              onChange={handleChange} onBlur={handleBlur}/>
            <span className="focus-input100" />
            <span className="label-input100" htmlFor="password">Enter Password</span>
            {errors.password && touched.password ? (<span style={{color:"red" }}>{errors.password}</span>):null}

          </div>
          <div className="wrap-input100 validate-input" >
            <input className="input100" type="password" name="conpass" id="conpass" value={values.conpass}
              onChange={handleChange} onBlur={handleBlur}/>
            <span className="focus-input100" />
            <span className="label-input100" htmlFor="conpass">Enter Confirm Password</span>
            {errors.conpass && touched.conpass ? (<span style={{color:"red" }}>{errors.conpass}</span>):null}
          
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn" >
              Register
            </button>
          </div>
        
        </form>
        <div className="login100-more" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
        </div>
      </div>
    </div>
  </div>
)

}