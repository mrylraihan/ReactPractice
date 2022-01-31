import React from 'react'
import styles from './UsersList.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'

const UsersList = (props) => {

    function deleteHandler() {
        props.onDelete(this.id)
    }

    const mapUsers = props.users.map(user => <li key={user.id}>{user.name} {user.age} years old <Button onClick={deleteHandler.bind(user)}>Delete user</Button></li>)

    return (
        <Card className={styles.users}>
            <ul>
                {mapUsers}
            </ul>
        </Card>
    )
}
export default UsersList