import React from 'react'

const Reducing = ({ numArr, stringArr, objArr }) => {
    const numA = [...numArr]
    const stringA = [...stringArr]
    const objA = [...objArr]

    const reducedNumA = numA.reduce((preV,curV)=>{return preV+curV},0)
    const reducedString = stringA.reduce((preV, curV) => { return preV + curV }, "initial value ")
    const reducedObj = objA.reduce((preV, curV) => { return preV + curV.start }, 0)
      
    return (
        <div>
            <h2>Reduce Different types of Arrays</h2>
            <div>
                <h4>lets reduce this numbers array</h4>
                <code> const simpleNumArr =[9,56,3,6,15,1,27] </code>
            <p>{reducedNumA}</p>
            </div>
          
            <div>
                <h4>lets reduce this string array</h4>
                <code code > const stringArr = ['Wallie', 'Hisham', 'Meshia']</code>
            <p>{reducedString}</p>
            </div>

            <div>
                <h4>lets reduce this object array startDates</h4>
                <code>const objectString = <span>{"[{name:'Company One', category:'Finance, start: 1981, end: 2003}, etc]"}</span></code>
            <p>{reducedObj}</p>
            </div>
          
        </div>
    )
}

export default Reducing