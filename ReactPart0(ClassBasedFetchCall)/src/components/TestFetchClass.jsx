import React, { Component } from 'react'

class TestFetchClass extends Component{
constructor(){
    super()
    this.state={
        buttonToggle:false,
        fetchedQuote:'',
    }
}
buttonToggleHandler(){
    this.setState({buttonToggle:!this.state.buttonToggle})
    this.setState({fetchedQuote:''})
}
componentDidMount(){
    this.fetchCall()
}
    componentDidUpdate() {
        this.state.buttonToggle// im not sure what this is doing 
    }
    componentWillUnmount() {
        this.fetchCall() // im also not sure what this is doing also 
    }
fetchCall(){
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(result => {
            console.log(result.quote);
            this.setState({fetchedQuote: result.quote})
        })
}

    render(){
        return (
            <div>
                {this.state.fetchedQuote && <h4>{this.state.fetchedQuote}</h4>}
            <button onClick={this.buttonToggleHandler.bind(this)}>click me</button>
        </div>
    )
}
}

export default TestFetchClass