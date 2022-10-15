import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleActions} from '../store/toggleSlice'
import { nameActions } from '../store/nameSlice'

function DisplayRedux() {
  const name = useSelector(state=>state.nameState.name)
  const toggle = useSelector(state=>state.toggleState.toggle)
  const dispatch = useDispatch()
  
  const onChangeName = (e)=>{
    dispatch(nameActions.getName(e.target.value))
  }

  const toggleHeader = ()=>{
    dispatch(toggleActions.getToggle())
  }
  console.log(toggle);
  return (
    <div className='app'>
      <div>
        {toggle && <h1>see if toggle works</h1>}
        {name && <h2>{name}</h2>}
        <label>
          type in name:
          <input type="text" value={name} onChange={onChangeName}/>
        </label>
        <button onClick={toggleHeader}>toggle header</button>
      </div>
    </div>
  )
}

export default DisplayRedux