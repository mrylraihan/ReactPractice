import React from 'react';
import styles from './WithTernerary.module.css'

const WithTernerary = (props) => {

    const changeColorHandler = ()=>{
        props.setActive(!props.active)
    }
    return (
        <div>
        <h1 className={`${props.active ? styles.active:''}`}>With And Ternerary Operator</h1>
        <button onClick={changeColorHandler}>change my color with a Ternerary Statement</button>
        </div>
    )
}
export default WithTernerary