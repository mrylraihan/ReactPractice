import React from 'react'
import useFetch2 from '../hooks/use-fetchStatic'

function CustomHookStatic() {
    const result = useFetch2('https://api.kanye.rest')
  return (
    <div className='app'>
          <h4>CustomHookStatic</h4>
          {result && <h6>{result.quote}</h6>}
    </div>
  )
}

export default CustomHookStatic