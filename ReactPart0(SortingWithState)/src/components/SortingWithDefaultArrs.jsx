import React, { useState } from 'react'

const SortingWithDefaultArrs = ({ objArr }) => {
    const ourCopy = [...objArr]

    const [sortedArrs, setSorted] = useState(ourCopy)
    const [stateToggle, setStatetoggle] = useState(false)

    const sortByPrice = () => {
        // now because we already have this data in our sortedArrs rearranging them wont be enough to trigger a state change which is why we have this stateToggle to force a component re-render
        // this is because we are using sortedArrs in our setSorted method 
        setSorted(prev=>prev.sort((a, b) => a.price - b.price))
        setStatetoggle(!stateToggle)
    }
    const sortByName = () => {
        setSorted(prev=>prev.sort((a, b) => (a.item < b.item) ? -1 : (a.item > b.item) ? 1 : 0))
        setStatetoggle(!stateToggle)

    }
    console.log(sortedArrs);
    return (
        <div>
            <h3>sorting with an Default state of the array we get in our props to recent this new array</h3>
            {objArr.map(ele => <p>Item name :{ele.item}, and Item price:{ele.price}</p>)}
            <button onClick={sortByName}>sort by name</button>
            <button onClick={sortByPrice}>sort by price</button>
            {sortedArrs.length > 1 && sortedArrs.map(ele => <p>Item name :{ele.item}, and Item price:{ele.price}</p>)}
        </div>
    )
}

export default SortingWithDefaultArrs