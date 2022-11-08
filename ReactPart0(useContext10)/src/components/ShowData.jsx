import React, { useContext } from 'react'
import FetchContext from '../store/fetch-data'
function ShowData() {
    const ctx = useContext(FetchContext)
    console.log(ctx);
  return (
    <div className='app'>
          <h1>ShowData</h1>
          {ctx.data && <h2>{ctx.data.quote}</h2>}
    </div>
  )
}

export default ShowData