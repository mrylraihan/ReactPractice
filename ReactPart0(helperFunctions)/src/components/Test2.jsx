import React, { useState } from 'react'
import styles from './Test2.module.css'
function Test2() {
    const [toggle, setToggle] = useState(false)
    
    const toggleColor = () =>{
        setToggle(!toggle)
    }
  return (
    <div>
          <h2>Conditional Rendering</h2>
          <h3 className={toggle?styles.red:styles.blue}>change my color</h3>
          <button onClick={toggleColor}>press me to change my color!</button>
    </div>
  )
}

export default Test2