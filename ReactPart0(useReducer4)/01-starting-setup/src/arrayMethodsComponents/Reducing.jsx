import React from 'react'

const Reducing = (props) => {
const reducedList = props.list.reduce((preV, curV)=>{
    return preV+" "+curV
},"")

    return (
        <div>
            <p>{reducedList}</p>
        </div>
    )
}

export default Reducing