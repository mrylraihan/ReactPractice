import React, { useState } from 'react'
// import axios from 'axios'
const Welcome = (props)=>{
    const [file, setFile] = useState({})

    const fileSelectorHandler=(event)=>{
        console.log(event.target.files[0]);
        setFile(event.target.files[0])
    }
    const fileUploadHandler =()=>{
        console.log(file.name);
    }

    return(
        <>
        <h5>upload a file {props.name}</h5>
            <input type='file' onChange={fileSelectorHandler}/>
            <button onClick={fileUploadHandler}>Upload</button>
            <div src={`${file.name}`}>
                
            </div>
        </>
    )
}

export default Welcome