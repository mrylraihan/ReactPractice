import React, {useRef} from 'react'

const ChangedName = (props) => {
    const nameRef = useRef()
    const getNewName= ()=>{
        props.setName(nameRef.current.value)
        nameRef.current.value = ''
    }
    return (
        <div className='app'>
            <label>
                type in new Name:
                <input type="text" ref={nameRef} />
            </label>
            <button type='button' onClick={getNewName} >submit new name</button>
        </div>
    )
}

export default ChangedName