import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            Home
            <ul>
                {props.peopleArray.map(ele =><li key={ele.id}>{ele.name}
                    <button onClick={
                        () => navigate(`/home/${ele.id}`)
                    }>sing page</button>
                </li>)}
                
            </ul>
        </div>
    )
}

export default Home