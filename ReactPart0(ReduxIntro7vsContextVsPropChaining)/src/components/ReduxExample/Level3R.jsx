import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Level3R() {
    const quote = useSelector(state=>state.quote)
    const dispatch = useDispatch()
    console.log(quote, 'redux');
    const getQuoteHandler=()=>{
        fetch('https://api.kanye.rest')
        .then(res=>res.json())
          .then(result=>dispatch({type:'quote',q:result}))
        .catch(console.error)
    }
  return (
    <div>
      <h3>Level3R Props Chaining State, and lifting up state</h3>
      {quote.quote && <h4>{quote.quote}</h4>}
      <button onClick={getQuoteHandler}>Show me Quote</button>
    </div>
  )
}

export default Level3R