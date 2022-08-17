import React, { useRef, useState } from 'react'

//creating help functions to check my validations
const validName = value => value.trim() != ''
const validAge = value => +value>0

function Test1() {
    const [person, setPerson] = useState('')
    const nameRef = useRef()
    const ageRef = useRef()

    const submitHandler = e =>{
        e.preventDefault()
        const name = nameRef.current.value
        const age = ageRef.current.value

        const nameIsValid = validName(name)
        const ageIsValid = validAge(age)
        if(nameIsValid && ageIsValid){
            setPerson({name:name, age:age})
            ageRef.current.value = ''
            nameRef.current.value = ''
        }else{
            setPerson({message:'try again !'})
        }

    }
console.log(person);
  return (
    <div>
          <h1>Test1 helper functions</h1>
          {person.name && <p> { person.name }</p>}
          {person.age && <p> { person.age }</p>}
          {person.message && <p> { person.message }</p>}
          <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Type your name:
                <input type="text" id='name' ref={nameRef} />
                </label>
            </div>
            <div>
                <label htmlFor="age">Type your name:
                      <input type="text" id='age' ref={ageRef} />
                </label>
            </div>
            <button>submit</button>
          </form>
    </div>
  )
}

export default Test1