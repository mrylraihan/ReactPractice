import React from 'react'

const ContextFile = React.createContext({
    name:'Wallie',
    sayName:function(){
        console.log(`hey im ${this.name}`);
    }
})


export default ContextFile