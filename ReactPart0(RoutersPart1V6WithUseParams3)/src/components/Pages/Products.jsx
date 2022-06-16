import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = ({productList}) => {
    const nav = useNavigate()
    const allProducts =  productList.map(ele=>{
        return <div className='app' key={ele.id}><li>{ele.name}</li>
            <button onClick={() => nav(`/Products/${ele.id}`)}>show me more</button>
        </div>
    })
    return (
        <div>
            {allProducts}
        </div>
    )
}

export default Products