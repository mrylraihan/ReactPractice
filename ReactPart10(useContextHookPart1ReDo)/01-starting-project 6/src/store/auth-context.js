import React from 'react';

//the return value of the React.creatContext that we are storing in the AuthContext
// is an object that contains components (provider, and consumer)
const AuthContext = React.createContext({
    // isLoggedIn : false,
    // name : 'wallie'
});

export default AuthContext;