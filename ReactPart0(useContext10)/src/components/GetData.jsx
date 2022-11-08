import React, { useContext } from 'react'
import FetchContext from '../store/fetch-data'
function GetData() {
    const ctx = useContext(FetchContext)
  return (
    <div className='app'>
          <h1>GetData</h1>
          <button onClick={ctx.getResult}>Get Quote</button>
    </div>
  )
}

export default GetData