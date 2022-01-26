import React, { useState } from 'react'
import Wrapper from '../Helpers/Wrapper'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError]=useState()

    const onChangeName = (event) => {
        setUserName(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }

    const AddUserHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0 && age.trim().length === 0) {
            console.log('error');
            setError({
                title: 'Invalid input', 
                message:'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if (+age <= 1) {
            console.log('age must be greater then 1');
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater then 1)'
            })
            return
        }
        console.log(userName, age);
        props.onAddUser(userName, age);
        setAge('')
        setUserName('')
    }



    return (
        <Wrapper>
            {error &&  <ErrorModal title={error.title} message={error.message} clearError={()=>setError()}/>}
            <Card className={styles.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor='userName'>UserName</label>
                    <input id='userName' type='text' value={userName} onChange={onChangeName} />
                    <label htmlFor='age'>Age  (Years)</label>
                    <input id='age' type='number' value={age} onChange={onChangeAge} />
                    {/* <button type='submit'>Add User</button> */}
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}
export default AddUser