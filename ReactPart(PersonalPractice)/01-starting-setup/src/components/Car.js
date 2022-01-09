import { Component } from "react"
// const Car = (props)=> (
//     <div>
//     <h2> Im driving a {props.carName}and its was {props.cost}</h2>
//     <p>hey there</p>
//     </div>
// )

// Different ways to write Components Class Component vs Functional Component 
// const Car = (props)=> {

//     return<div>
//             <h2> Im driving a {props.carName}and its was {props.cost}</h2>
//             <p>hey there</p>
//          </div> 
// }

class Car extends Component{
    render(){
        return <div className="test">
            <h2> Im driving a {this.props.carName} and its was {this.props.cost} and its a {this.props.type} car </h2>
            <p>hey there</p>
            </div>
    }
}

export default Car