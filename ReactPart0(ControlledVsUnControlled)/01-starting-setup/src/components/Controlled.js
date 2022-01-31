import React from 'react'

class Controlled extends React.Component {

    state={
        text:''
    }
    handleChange =(e)=>{
        this.setState({
           text: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state.text, ' from class controlled Component');
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <>
                <input
                    type='text'
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Click me Controlled</button>
            </>
        )
    }
}

export default Controlled;