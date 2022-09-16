import React from 'react'

function Level3(props) {
    console.log(props, 'props');
    
    const getQuoteHandler=()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(props.setQuote)
        .catch(console.error)
    }
  return (
    <div>
      <h3>Level3 Props Chaining State, and lifting up state</h3>
      {props.quote && <h4>{props.quote.quote}</h4>}
      <button onClick={getQuoteHandler}>Show me Quote</button>
    </div>
  )
}

export default Level3