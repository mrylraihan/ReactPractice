import React from 'react';

const TestContext = React.createContext({
    result:'Return value of Api Call', apiCall:(a,b)=>{
        return fetch(a)
        .then(res => res.json())
            .then(result => {
                console.log(result);
                console.log(result[Object.keys(result)[0]]);
                b(result[Object.keys(result)[0]])
                return
            })
            .catch(error=>console.log(error))
           
    }
})

export default TestContext