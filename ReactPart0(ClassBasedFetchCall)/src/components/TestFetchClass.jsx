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
// like useEffect with an empty dependency array
componentDidMount(){
    this.fetchCall()
}
//relying on previous state to see if it changed and if it did then run the method 
    componentDidUpdate(preVP, preVS) {
        if(preVS.buttonToggle!==this.state.buttonToggle){
            this.state.buttonToggle// im not sure what this is doing 
            this.fetchCall()
        }
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