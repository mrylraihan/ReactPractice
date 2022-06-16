import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = ({productList}) => {
    const param = useParams()
    const id = param.id
    const nav = useNavigate()
    const singleProduct = productList.filter(item => item.id == id)[0]
    console.log(singleProduct);
    return (
        <div>
            <h1>Single Product</h1>
            <p>{singleProduct.name}</p>
            <p>{singleProduct.id}</p>
            <button onClick={nav.bind(this, -1)}>go back</button>
        </div>
    )
}

export default Product