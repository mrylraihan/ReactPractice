import React from 'react'

import Card from '../UI/Card.js'
import styles from './UsersList.module.css'
import Button from '../UI/Button'

const UsersList = (props) => {


    // const deleteHandler = ()=>{
    //     props.onDelete(this.id)
    // }

    function deleteHandler() {
        props.onDelete(this.id)
    }
    function multiplyyears() {
        const daysAlive = this.age * 365
        alert(`you've been alive for ${daysAlive} days`) 
    }

    const newElements = props.users.map(user => <li key={user.id}>{user.name} ({user.age} years old) <Button onClick={multiplyyears.bind(user)}>how manys days iv been alive</Button><Button onClick={deleteHandler.bind(user)}>Delete User</Button></li>)

    return (
        <Card className={styles.users}>
        <ul>
            {newElements}
        </ul>
        </Card>
    )
}

export default UsersList;