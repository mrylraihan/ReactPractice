import React from 'react'
import { useContext } from 'react'
import ContextFile from '../../contextStore/context-file'
function Level3C() {
  const ctx = useContext(ContextFile)
  console.log(ctx, 'ctx');

  const getQuoteHandler = () => {
    fetch('https://api.kanye.rest')
      .then(res => res.json())
      .then(ctx.setCQuote)
      .catch(console.error)
  }
  return (
    <div>
      <h3>Level3C using Context to manage state</h3>
      {ctx.cQuote && <h4>{ctx.cQuote.quote}</h4>}
      <button onClick={getQuoteHandler}>Show me Quote</button>
    </div>
  )
}

export default Level3C