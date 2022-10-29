import React from 'react'

function Home(props) {
  return (
    <div className='app'>
        <h3>Home</h3>
          <button onClick={()=>props.setUser('')}>Log Out</button>
    </div>
  )
}

export default Home