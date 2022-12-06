import React, { createContext, useContext, useReducer, useState } from 'react'
import reducer from '../Reducers/Cartreducer'
import { useEffect } from 'react'
const prdcart = createContext()




const getlocalcartdata = () => {
    let localcartdata = localStorage.getItem("rajcart");
    if (localcartdata === null) {
        return [];
    } else {
        return JSON.parse(localcartdata)
    }
}

const intialstate = {
    cart: getlocalcartdata(),
    total_price: "",
    cart_amount: '',
    shipping_fee: 5000
}

export default function Cartadd(props) {
    const [state, dispatch] = useReducer(reducer, intialstate)
    const ccc = "raj"


    const addprdtocart = (id, Product) => {
        dispatch({ type: "add_to_cart", payload: { id, Product } })
    }

    const removeitem = (id) => {
        dispatch({ type: "REMOVE_TO_CART", payload: id })
    }

    const removecart = () => {
        dispatch({ type: "REMOVE_ALL_CART" })
    }

    useEffect(() => {
        dispatch({type:"TOTAL_PRICE"})
        localStorage.setItem("rajcart", JSON.stringify(state.cart))
    }, [state.cart])
    return (
        <>
            <prdcart.Provider value={{ ...state, ccc, addprdtocart, removeitem, removecart }}>
                {props.children}
            </prdcart.Provider>
        </>)
}

const useCartcontextt = () => {
    return useContext(prdcart)
}

export { useCartcontextt }
