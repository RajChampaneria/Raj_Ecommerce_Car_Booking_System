import React, { useEffect, useState } from 'react'
import prcontext from './Productcontext'

export default function Itemcontext(props) {
    const [product,Setproduct]=useState([])
    const [arrival,Setarrival]=useState([])


    useEffect(()=>{
        getproduct()
    },[])

    const getproduct = () => {
        fetch("http://localhost:3004/products")
            .then(res => res.json())
            .then(data => {
                Setproduct(data)
            })
    }

    const getarrival = () => {
        
    }


    return (
        <prcontext.Provider value={{product}}>
            {props.children}
        </prcontext.Provider>
    )
}
