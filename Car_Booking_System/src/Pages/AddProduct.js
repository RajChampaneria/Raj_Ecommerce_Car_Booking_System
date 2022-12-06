import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router'


export default function Addproduct() {

  const navigate=useNavigate()
  const [name,Setname]=useState()
  const [price,Setprice]=useState()
  const [company,Setcompany]=useState()
  const [description,Setdescription]=useState()
  const [model,Setmodel]=useState()


  

  // useEffect((e)=>{
  //   // e.preventDefault();
  //   HandleProductAdd();
  // },[])

  const HandleProductAdd=(e)=>{
    const data={name,company,price,model,description}
      e.preventDefault()
      
      fetch("http://localhost:3004/products",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
      })
      .then((response)=>response.json())
      .then((result)=>{
        navigate("/UpdateProducts")
      })

  }

  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={HandleProductAdd} >
                <span className="login100-form-title p-b-43">
                Add New Product
                </span>
                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text"  onChange={(e)=>Setname(e.target.value)} />
                    <span className="focus-input100" />
                    <span className="label-input100">Enter Product Name</span>
                </div>

                <div className="wrap-input100 validate-input " >
                    <input className="input100" type="text" onChange={(e)=>Setcompany(e.target.value)}/>

                    <span className="focus-input100" />
                    <span className="label-input100">Enter Company</span>
                </div>

                <div className="wrap-input100 validate-input " >
                    <input className="input100" type="text" onChange={(e)=>Setmodel(e.target.value)}/>

                    <span className="focus-input100" />
                    <span className="label-input100">Enter model</span>
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" onChange={(e)=>Setdescription(e.target.value)}/>
                    <span className="focus-input100" />
                    <span className="label-input100" htmlFor="conpass">Enter description</span>

                </div>
                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" onChange={(e)=>Setprice(e.target.value)}/>
                    <span className="focus-input100" />
                    <span className="label-input100" htmlFor="conpass">Enter Price</span>

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
