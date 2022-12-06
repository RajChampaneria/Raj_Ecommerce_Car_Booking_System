import React from 'react'

export default function Cartaddreducer(state, action) {

    if (action.type === "add_to_cart") {
        const { id, Product } = action.payload

        // console.log(Product,id,"kkkkkkkkkkkkkkk")
        const newproduct={
            id,
            images:Product.images,
            price:Product.price,
            category:Product.category,
            name:Product.name,
            description:Product.description  
        }

        return {
            ...state,
            cart: [...state.cart,newproduct]
        }
    }

    if(action.type==="REMOVE_TO_CART"){

        const updatedcart =state.cart.filter((xuu)=>xuu.id !== action.payload)

        return{
            ...state,
            cart:updatedcart
        }
    }

    if(action.type==="REMOVE_ALL_CART"){
        return{
            ...state,
            cart:[]
        }
    }

    
    if(action.type==="TOTAL_PRICE"){
        let total_price=state.cart.reduce((initialval,curElem)=>{
            let {price}=curElem;
            initialval=initialval+ price;
            return initialval; 
        },0)

        return{
            ...state,
            cart_amount:total_price
        }
    }

    return state
}