import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from './ErrorModal.module.css' 
import ReactDom from 'react-dom'
import H1 from './H1'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.clearError}></div>
}
const ModalOverlay = props =>{
    return <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.clearError}>Okay</Button>
        </footer>
    </Card>
}


const ErrorModal = props =>{

    return(
        <>
            {ReactDom.createPortal(<H1>{props.title}</H1>, document.getElementById('extra'))}
            {ReactDom.createPortal(<Backdrop clearError={props.clearError}/>, document.getElementById('backdrop-root'))}  
            {ReactDom.createPortal(<ModalOverlay clearError={props.clearError} title={props.title} message={props.message}/>, document.getElementById('overlay-root'))}  
        </>

    )
}

export default ErrorModal