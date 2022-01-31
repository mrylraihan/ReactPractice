import React, { useState, useRef } from 'react'
import Wrapper from '../Helpers/Wrapper'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const fullNameInputRef = useRef()

    // const [userName, setUserName] = useState('')
    // const [age, setAge] = useState('')
    const [error, setError]=useState()

    // const onChangeName = (event) => {
    //     setUserName(event.target.value)
    // }
    // const onChangeAge = (event) => {
    //     setAge(event.target.value)
    // }

    const AddUserHandler = (event) => {
        event.preventDefault()
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
            console.log('error');
            setError({
                title: 'Invalid input', 
                message:'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if (+enteredAge <= 1) {
            console.log('age must be greater then 1');
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater then 1)'
            })
            return
        }
        // console.log(userName, age);
        props.onAddUser(enteredName, enteredAge);
        console.log(fullNameInputRef.current.value)
        // how to reset the value with out state or value
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        fullNameInputRef.current.value = ''
        // setAge('')
        // setUserName('')
    }


    return (
        <Wrapper>
            {error &&  <ErrorModal title={error.title} message={error.message} clearError={()=>setError()}/>}
            <Card className={styles.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor='userName'>UserName</label>
                    <input id='userName' type='text' 
                    // value={userName} onChange={onChangeName} 
                    ref={nameInputRef}/>
                    <label htmlFor='name'>Full Name</label>
                    <input id='name' type='text' 
                    // value={userName} onChange={onChangeName} 
                    ref={fullNameInputRef}/>
                    <label htmlFor='age'>Age  (Years)</label>
                    <input id='age' type='number' 
                    // value={age} onChange={onChangeAge} 
                    ref={ageInputRef}/>
                    {/* <button type='submit'>Add User</button> */}
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}
export default AddUser