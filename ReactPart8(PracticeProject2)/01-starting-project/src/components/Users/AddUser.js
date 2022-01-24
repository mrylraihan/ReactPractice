import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'

const AddUser=(props)=>{
    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')

    const onChangeName=(event)=>{
        setUserName(event.target.value)
    }
    const onChangeAge=(event)=>{
        setAge(event.target.value)
    }

    const AddUserHandler=(event)=>{
        event.preventDefault()
        if(userName.trim().length === 0 && age.trim().length === 0){
            console.log('error');
            return 
        }
        if(+age <= 1){
            console.log('age must be greater then 1');
            return 
        }
        console.log(userName, age);
        props.onAddUser(userName, age);
        setAge('')
        setUserName('')

    }
    return(
        <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
            <label htmlFor='userName'>UserName</label>
            <input id='userName' type='text' value={userName} onChange={onChangeName}/>
            <label htmlFor='age'>Age  (Years)</label>
            <input id='age' type='number' value={age} onChange={onChangeAge}/>
            {/* <button type='submit'>Add User</button> */}
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
    )
}
export default AddUser