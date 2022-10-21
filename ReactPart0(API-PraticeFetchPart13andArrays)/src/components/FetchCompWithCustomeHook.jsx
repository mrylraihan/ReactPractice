import React, { useEffect } from 'react'
import useFetch from '../hooks/use-fetch'

function FetchCompWithCustomeHook(props) {
    // const [quote, setQuote] = useState('')
    const [data, getData] = useFetch('https://api.kanye.rest')
    useEffect(()=>{
        if(data){
            props.addToList(prev=>{
                return [...prev, data]
            })
        }
    }, [data])
    
  return (
    <div>
          <div className='app'>
          <h4>FetchCompWithCustomeHook</h4>
              {data && <h5>{data}</h5>}
              <button onClick={getData}>get a Quote</button>
          </div>
    </div>
  )
}

export default FetchCompWithCustomeHook