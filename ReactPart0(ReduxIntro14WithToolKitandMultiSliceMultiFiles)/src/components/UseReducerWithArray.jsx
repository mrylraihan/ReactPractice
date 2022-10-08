import React from 'react'
import { useReducer } from 'react'

const initial = {
    toggle:true,
    name:'',
    listOfName: []
}
const reducer = (state, action)=>{
    if(action.type === 'name'){
        return {...state, name:action.n}
    }else if(action.type ==='list'){
        // we can do it either way regardless when we clear our input with the dispatch it will create a property called name 
        return {...state, listOfName: [...state.listOfName, state.name], name:''}
        // return { listOfName: [...state.listOfName, state.name], name: '' }
        // return { listOfName: [...state.listOfName, state.name] }

    }else if(action.type === 'toggle'){
        return {...state, toggle:!state.toggle}
    }else{
        return state
    }
}
function UseReducerWithArray() {
    const [data, dispatch] = useReducer(reducer, initial)

    const getName = e =>{
        dispatch({type:'name', n: e.target.value})
    }

    const addToList = () =>{
        dispatch({type:'list'})
        dispatch({ type: 'name', n: '' })
    }
    console.log(data);
    let contentList = data.listOfName.map((ele, idx) => <li key={idx}>{ele}</li>)
  return (
    <div className='app'>
          { data.toggle && <h3>UseReducerWithArray</h3>}
          <div>
            <label>
                add name to list : 
                <input type="text" value={data.name} onChange={getName}/>
            </label>
            <button onClick={addToList}>Add to list</button>
          </div>
           <div>
           { data.listOfName.length > 0 &&<h3>List of names</h3> }
            <ul>
                  {data.listOfName.length > 0 && contentList}
            </ul>
          </div>
          <button onClick={dispatch.bind(this, {type:'toggle'})}>Toggle</button>
    </div>
  )
}

export default UseReducerWithArray