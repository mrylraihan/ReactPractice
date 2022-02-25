import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: ()=>{},
    onLogin :(email, password)=>{}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
   
    useEffect(() => {
        const storesUserLoggedInInfo = localStorage.getItem('isLoggedIn')
        if (storesUserLoggedInInfo === '1') {
            setIsLoggedIn('true')
            console.log(true);
        } else {
            console.log(false);
        }
    }, [])
    const logoutHandler = ()=>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    }
    const loginHandler = ()=>{
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
