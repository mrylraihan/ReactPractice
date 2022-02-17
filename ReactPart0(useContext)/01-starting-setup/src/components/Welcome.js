import React from "react"

// Stateless Functional Components
export function Welcome(props){
    return <h1>Hello, {props.name}!👋🏽</h1>
}
export function Goodbye(props){
    return <h1>Bye, {props.name}!👋🏽</h1>
}

// Stateful Class Components
export class NameCheck extends React.Component{

    render(){
        return <h1> Hey from class, {this.props.name}</h1>
    }
}

