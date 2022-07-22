import React from 'react'

const ContextFile = React.createContext({
    name: " Wallie R. ", 
    sayName:function() {
        return `hey im ${this.name}`;
    }
})

export default ContextFile
