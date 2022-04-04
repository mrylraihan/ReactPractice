import React from 'react'

const Filtering = ({ numArr, stringArr, objArr }) => {
    const numA = [...numArr]
    const stringA = [...stringArr]
    const objA = [...objArr]

    const greater10 = numA.filter((ele)=> ele>10)
    const notstartingwithW = stringA.filter((ele)=>ele[0]!=='W')
    const notNonProfit = objA.filter(ele=>ele.category !== 'NonProfit')
    return (
        <div>
            <h2>Filtering Different types of Arrays</h2>
            <div>
                <h4>lets Filter this numbers array by numbers greater then 10</h4>
                <code> const simpleNumArr =[9,56,3,6,15,1,27] </code>
            <p>[{greater10.map(ele => <span key={ele}>{ele},</span>)}]</p>
            </div>
            <div>
                <h4>lets Filter this numbers array by numbers greater then 10</h4>
                <code> const simpleNumArr =[9,56,3,6,15,1,27] </code>
            <p>[{greater10.map(ele => <span key={ele}>{ele},</span>)}]</p>
            </div>
            <div>
                <h4>lets Filter this array of names, and only returns names that dont start with a W</h4>
                <code>const stringArr = ['Wallie', 'Hisham', 'Meshia']</code>
                <p>[{notstartingwithW.map(ele => <span key={ele}>{ele},</span>)}]</p>
            </div>
            <div>
                <h4>lets Filter this array of objects, and only returns Companies that arent of Category: Nonprofit</h4>
                <code>const stringArr = ['Wallie', 'Hisham', 'Meshia']</code>
                <p>[{notNonProfit.map(ele => <span key={ele.name}>{ele.category},</span>)}]</p>
            </div>
        </div>
    )
}

export default Filtering