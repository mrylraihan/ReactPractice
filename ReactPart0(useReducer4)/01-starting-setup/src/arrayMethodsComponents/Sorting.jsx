import React from 'react'

const Sorting = (props) => {
    const sortedList = [...props.list]
    sortedList.sort()
    return (
        <div>
            <ul>
                {sortedList.map(ele=>{
                   return  <li key={sortedList.indexOf(ele)}>{ele}</li>
                })}
            </ul>
        </div>
    )
}

export default Sorting