import React from 'react'

export default function HomePage(props) {
  return (
    <>
    <h2>HomePage</h2>
    <p>welcome {props.userName}</p>
    <button onClick={props.logOut.bind(this, false)}>log out</button>
    </>
  )
}
