import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {

    return (
        <div>
            <h1>HomePage</h1>
            <ul>
                <Link to='/allTask'><li>See All Task</li></Link>
                <Link to='/createTask'><li>create a task</li></Link>
            </ul>
        </div>
    )
}

export default HomePage