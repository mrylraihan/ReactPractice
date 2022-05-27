import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
const Home = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            Home
            <ul>
                {props.peopleArray.map(ele => <><li key={ele.id}>{ele.name}</li><button onClick={
                    () => navigate(`${ele.id}`)
                }>sing page</button></>)}
                
            </ul>
            <Outlet/>
        </div>
    )
}

export default Home