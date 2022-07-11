import React from 'react'

function ShowQuote(props) {
   
    return (
        <div>

       {props.quote && <p>{props.quote}</p>}
        </div>
    )
}

export default ShowQuote
