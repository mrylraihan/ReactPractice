import React from "react";
import styles from './Button.module.css'

const H1 = (props) => {
    return <h1 className={styles.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</h1>
}
export default H1;