import React, { useState } from 'react'

const SortingWithEmptyArrs = ({objArr}) => {
    const ourCopy = [...objArr]
    
    const [sortedArrs, setSorted] = useState([])

    const sortByPrice = ()=>{
        setSorted(ourCopy.sort((a,b)=>a.price-b.price))
    }
    const sortByName = ()=>{
        setSorted(ourCopy.sort((a,b)=>(a.item < b.item) ? -1 : (a.item > b.item) ? 1 : 0))
    }
    console.log(sortedArrs);
    return (
        <div>
            <h3>sorting with an empty state and using the array we get in our props to recent this new array</h3>
            {objArr.map(ele => <p>Item name :{ele.item}, and Item price:{ele.price}</p>)}
            <button onClick={sortByName}>sort by name</button>
            <button onClick={sortByPrice}>sort by price</button>
            {sortedArrs.length>1 && sortedArrs.map(ele => <p>Item name :{ele.item}, and Item price:{ele.price}</p>)}
        </div>
    )
}

export default SortingWithEmptyArrs