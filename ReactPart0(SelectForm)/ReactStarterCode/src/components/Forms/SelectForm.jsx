import React, { useState } from 'react'


const SelectForm = () => {
    const [optionPicked, setOptionsPicked ] = useState()

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        console.log(optionPicked);
    }

    const changeSelectHandler = (e)=>{
        setOptionsPicked(e.target.value)
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor='fruits'>
                    Pick your favorite Fruit: 
                </label>
                <select name="fruits" id="fruits" value={optionPicked} onChange={changeSelectHandler}>
                    <option defaultValue value="dragon fruit">dragon fruit</option>
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="blueberry">Blue Berry</option>
                    <option value="watermelon">Watermelon</option>
                </select>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default SelectForm