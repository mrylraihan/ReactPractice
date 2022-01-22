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
   

    const newElements = props.users.map(user => <li key={user.id}>{user.quote} <Button onClick={deleteHandler.bind(user)}>Delete Quote</Button></li>)

    return (
        <Card className={styles.users}>
        <ul>
            {newElements}
        </ul>
        </Card>
    )
}

export default UsersList;