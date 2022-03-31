import React from 'react';
import styles from './WithAnd.module.css'

const WithAnd = (props)=>{

    const changeColorHandler = ()=>{
        props.setActive(!props.active)
        console.log('we used the Add operator');
    }
    return(
        <div>
            <h1 className={(props.active && styles.active)}>With And Operator</h1>
            <button onClick={changeColorHandler}>change my color with the And Operator</button>
        </div>
    )
}
export default WithAnd