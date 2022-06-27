import React from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'

const MainPage = ({ isLoggedIn, onLogin, onLogout, setUser, user}) => {
    return (
        <div>
            {!isLoggedIn && <Login onLogin={onLogin} setUser={setUser}/>}
            {isLoggedIn && <Home onLogout={onLogout} user={user}/>}
        </div>
    )
}

export default MainPage