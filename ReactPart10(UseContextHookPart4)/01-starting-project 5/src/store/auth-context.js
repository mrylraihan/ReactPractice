import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: ()=>{}
});

export default AuthContext;
// providing -means you wrap all your jsx code that could listen/access this context
// any component thats not wrapped wont be able to listen, so if we need this 
// context in the entire application then we should wrap the everything in the app
// component
// when wrapping this context around other components we need ot Specify if if its a consumer or provider
//<AuthContext.Provider>

// consuming - means your can listen for the context file, so where ever you want to use the data you would be a consumer and wrap its as such, to indicate that you weill be accessing the context file here 

// when wrapping this context around other components we need ot Specify if if its a consumer or provider
//<AuthContext.Consumer>