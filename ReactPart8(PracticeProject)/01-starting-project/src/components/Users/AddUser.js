import React, {useState} from 'react'
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'  
import styles from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal.js'
const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()


    const changeUsernameHandler = (event)=>{
        setEnteredUsername(event.target.value)
    }
    const changeAgeHandler = (event)=>{
        setEnteredAge(event.target.value)
    }

    const addUserHandler = event => {
        event.preventDefault()
        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }
    
        if(+enteredAge < 1){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (non-empty values)'
            })
            return 
        }
            props.onAddUser(enteredUsername, enteredAge);
            setEnteredUsername('')
            setEnteredAge('')
    }

    const errorHandler =()=>{
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username' >UserName</label>
            <input id='username' type='text' value={enteredUsername} onChange={changeUsernameHandler}/>
            {/* <input id='username' type='text' value={enteredUsername} onChange={changeUsernameHandler}/> */}
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number' value ={enteredAge} onChange={changeAgeHandler}/>
            <Button type='submit'>Add user</Button>
        </form>
        </Card>
        </div>
    )
}
export default AddUser