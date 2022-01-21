import React, {useState} from 'react'
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'  
import styles from './AddUser.module.css'
const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')


    const changeUsernameHandler = (event)=>{
        setEnteredUsername(event.target.value)
    }
    const changeAgeHandler = (event)=>{
        setEnteredAge(event.target.value)
    }

    const addUserHandler = event => {
        event.preventDefault()
        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
            return
        }
    
        if(+enteredAge < 1){
            return 
        }
            props.onAddUser(enteredUsername, enteredAge);
            setEnteredUsername('')
            setEnteredAge('')
    }

    return (
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username' >UserName</label>
            <input id='username' type='text' value={enteredUsername} onChange={changeUsernameHandler}/>
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number' value ={enteredAge} onChange={changeAgeHandler}/>
            <Button type='submit'>Add user</Button>
        </form>
        </Card>
    )
}
export default AddUser