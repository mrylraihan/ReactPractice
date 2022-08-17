import React, { useRef } from 'react'
import { useState } from 'react';

const validateEmail = email=> email.includes('@');
const validAge = age => +age >= 18

function Test3() {
    const [user, setUser] = useState('')
    const emailRef = useRef();
    const ageRef = useRef();

    const submitHandler=(e)=>{
        e.preventDefault()
        const email = emailRef.current.value;
        const age = ageRef.current.value
        const isEmailValid = validateEmail(email)
        const isAgeValid = validAge(age)
        if(isEmailValid && isAgeValid){
            setUser({
                email:email, age:age
            })
        }else{
            setUser({errorMessage:'please try again, or you arent old enough'})
        }

        emailRef.current.value = ''
        ageRef.current.value = ''
    }

  return (
    <div>
          <h3>Test3</h3>
          {user.email && <p>{user.email} is allowed to use this site</p>}
          {user.errorMessage && <p>{user.errorMessage}</p>}
          <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email:
                    <input type="text" id='email' ref={emailRef}/>
                </label>
            </div>
            <div>
                <label htmlFor="age">Age:
                    <input type="text" id='age' ref={ageRef}/>
                </label>
            </div>
            <button>Submit credentials</button>
          </form>
    </div>
  )
}

export default Test3