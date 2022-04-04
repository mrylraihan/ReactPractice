import React from 'react'

const Sorting = ({numArr, stringArr, objArr}) => {
    const numA = [...numArr]
    const stringA=[...stringArr]
    const objA=[...objArr]
    // this will sort your number in acceding order
    // with out a - b it will get sorted by its hexicode value
    numA.sort((a,b)=>a-b)
    // with String its will do alphabetical order by default
    stringA.sort()
    // sorting with objects is alittle different 
    const objA2= [...objA]
    objA.sort((a,b)=>a.start-b.start)
    objA2.sort((a, b) => (a.category < b.category) ? -1 : (a.category > b.category) ? 1 : 0)

    return (
        <div>
            <h2>Sorting  Different types of Arrays</h2>
            <div>
                <h4>lets sort this numbers array</h4>
                <code> const simpleNumArr =[9,56,3,6,15,1,27] </code>
            </div>
            <p>[{numA.map(ele=><span key={ele}>{ele},</span>)}]</p>
            <div>
                <h4>lets sort this array of names</h4>
                <code>const stringArr = ['Wallie', 'Hisham', 'Meshia']</code>
            </div>
            <p>[{stringA.map(ele=><span key={ele}>{ele},</span>)}]</p>
            
            <div>
                <h4>lets sort this array of objects by start date</h4>
                <code>const objectString = <span>{"[{name:'Company One', category:'Finance, start: 1981, end: 2003}, etc]"}</span></code>
            </div>
            <p>[{objA.map(ele=><span key={ele.start}>start: {ele.start},</span>)}]</p>
            <div>
                <h4>let sort this array of objects by Company Category</h4>
                <code>const objectString = <span>{"[{name:'Company One', category:'Finance, start: 1981, end: 2003}, etc]"}</span></code>
            </div>
            <p>[{objA2.map(ele => <span key={ele.name}>category: {ele.category}, </span>)}]</p>
            
        </div>
    )
}

export default Sorting