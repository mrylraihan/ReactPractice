import React from 'react'
import { useReducer } from 'react'

const initial= {
    person:{name:'',age:''},
    peopleList:[]
}

const peopleDataReducers = (state, action)=>{
    if(action.type == 'name'){
        return {person:{name:action.name, age:state.person.age,}, peopleList:state.peopleList}
    } else if (action.type == 'age'){
        return { person: { name: state.person.name, age: action.age, }, peopleList: state.peopleList }
    }else if(action.type == 'addlist'){
        return { person: { name: '', age: '' }, peopleList: [...state.peopleList, {name:state.person.name, age:state.person.age}] }
    }
}

function TestReducers() {
    const [peopleState, dispatch ] = useReducer(peopleDataReducers, initial)
    const nameOnChangeHandler = e =>{
        dispatch({type:'name', name:e.target.value})
    }
    const ageOnChangeHandler = e =>{
        dispatch({type:'age', age:e.target.value})
    }
    const onSubmitHandler = e =>{
        e.preventDefault()
        dispatch({type:'addlist'})
    }
    console.log(peopleState);
  return (
    <div className='app'>
          <h5>TestReducers</h5>
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>
                    Name:
                    <input type="text" value={peopleState.person.name} onChange={nameOnChangeHandler}/>
                </label>
            </div>
            <div>
                <label>
                    Age:
                      <input type="text" value={peopleState.person.age} onChange={ageOnChangeHandler}/>
                </label>
            </div>
            <button>Submit</button>
          </form>
    </div>
  )
}

export default TestReducers