import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {toggleActions} from '../store/toggle-slice'
import {nameActions} from '../store/name-slice'
import {listActions} from '../store/list-slice'

function WithReduxtoolKit() {
    const state = useSelector(state=>state)
    const name = useSelector(state=>state.name.name)
    const list = useSelector(state=>state.list.list)
    const toggle = useSelector(state=>state.toggle.toggle)
    const dispatch = useDispatch()

    const getName = e =>{
        dispatch(nameActions.getName(e.target.value))
    }

    const addName = () =>{
        dispatch(listActions.getList(name))
        dispatch(nameActions.getName(''))
    }
console.log(state);
console.log(list);
    let contentList = list.map((ele, idx) => <li key={idx}>{ele}</li>)
  return (
    <div className='app'>
        {toggle &&  <h1>WithReduxtoolKit</h1>}
          <div>
              <label>
                  add name to list :
                  <input type="text"  value={name} onChange={getName}/>
              </label>
              <button onClick={addName}>Add to list</button>
          </div>
          <div>
              {list.length > 0 && <h3>List of names</h3>}
              <ul>
                  {list.length > 0 && contentList}
              </ul>
          </div>
          <button onClick={dispatch.bind(this, toggleActions.getToggle())}>Toggle</button>
    </div>
  )
}

export default WithReduxtoolKit