import { Component } from "react";

export default class TestState extends Component{
    constructor(props){
        super(props)
        this.state = {
            brand:'Ford',
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeModel = ()=>{
        if (this.state.model ==='Mustang'){
            this.setState({model:'Moc E'})
        }else{
            this.setState({model:'Mustang'})
        }
    }

    render(){
        return(
            <>
            <h1>{this.state.brand}</h1>
            <h1>{this.state.model}</h1>
            <h1>{this.state.year}</h1>
            <button onClick={this.changeModel}>Change Model</button>
            <></>
            </>
        )
    }

}