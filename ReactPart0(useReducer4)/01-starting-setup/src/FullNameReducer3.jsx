import React, {useReducer} from 'react'


const reducer =(state, action)=>{
    if(action.type === "F"){
        return{ ...state, fName: action.first}
    }else if(action.type === "L"){
        return {...state, lName: action.last}
    }else if(action.type ==="Full"){
        return {...state, 
        fullName: state.fName && state.lName?
        state.fName + ' ' + state.lName :state.fullName
        }
    }
}

const FullNameReducer3 = () => {
    const [name, dispatcher] = useReducer(reducer, {
        fName:'',
        lName:'',
        fullName:'Wallie'
    })
    const getFirstN = (e)=>{
        dispatcher({type:"F", first:e.target.value})
    }
    const getLastN = (e)=>{
        dispatcher({type:"L", last:e.target.value})
    }
    const getFullName=(e)=>{
        e.preventDefault()
        dispatcher({type:'Full'})
        dispatcher({type:'F', first:''})
        dispatcher({type:'L', last:''})
    }

    return (
        <div>
            <h1>{name.fullName}</h1>
            <form onSubmit={getFullName}>
                <label>Enter your first name:
                    <input type="text" value={name.fName} onChange={getFirstN}/>
                </label>
                <label>Enter your last name:
                    <input type="text" value={name.lName} onChange={getLastN}/>
                </label>
                <button type='submit'>Get Full Name</button>
            </form>
        </div>
    )
}

export default FullNameReducer3