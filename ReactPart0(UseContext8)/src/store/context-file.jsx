import React from 'react'

const ContextFile = React.createContext({
    name:'Wallie',
    sayName:function(){
        return `hey im ${this.name}`;
    }
})


export default ContextFile