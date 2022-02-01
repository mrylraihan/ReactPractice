import React from 'react'

class UnControlled extends React.Component{
    
    handleSubmit = (e) =>{
        const name = this.userValue.value;
        console.log(name, ' from class uncontrolled Component');
        this.userValue.value = ''
    }
    render(){
        return(
            <>
            <input
            type='text'
            ref={a=> this.userValue = a}
            />
            <button onClick={this.handleSubmit}>Click me UnControlled</button>
            </>
        )
    }
}

export default UnControlled;