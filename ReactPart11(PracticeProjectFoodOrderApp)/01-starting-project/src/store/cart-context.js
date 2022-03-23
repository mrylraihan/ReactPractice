import React from 'react'

const CartContext = React.createContext({
    // for better autoComplete 
    items:[],
    totalAmount: 0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
});

export default CartContext;