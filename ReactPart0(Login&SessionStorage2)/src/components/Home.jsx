import React, { useState , useEffect} from 'react'


function Home(props) {
    const [user, setUser] = useState('')
    useEffect(()=>{
        if(!props.user){
            setUser(JSON.parse(localStorage.getItem('user')))
        }else{
            setUser(props.user)
        }
    },[])

    return (
        <div>
            <h1>Home</h1>
            {user&&<h2>{user.email}</h2>}
            <button onClick={props.onLogOut}>Logout</button>
        </div>
    )
}

export default Home
