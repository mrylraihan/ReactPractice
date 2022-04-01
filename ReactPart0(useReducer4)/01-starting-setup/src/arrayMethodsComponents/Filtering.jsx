import React from 'react'

const Filtering = (props) => {
    const filteredList = props.list.filter(ele=>ele[0]!== 'w')
    return (
        <div>
            {filteredList.map(ele=><li key={filteredList.indexOf(ele)}>{ele}</li>)}
        </div>
    )
}

export default Filtering