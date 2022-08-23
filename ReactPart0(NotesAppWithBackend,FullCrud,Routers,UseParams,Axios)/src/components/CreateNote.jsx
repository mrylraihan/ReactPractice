import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const CreateNote = () => {
    const [inputNote, setInputNote] = useState({})
    const [note, setNote] = useState({})
    const title = useRef()
    const body = useRef()

    useEffect(() => {

        axios.post('http://localhost:3001/notes', inputNote)
            .then(result => result.data)
            .then(result => setNote(result))
            .catch(err => console.log(err))
    }, [inputNote])

    const submitHandler = (e) => {
        e.preventDefault()
        setInputNote({
            note: {
                title: title.current.value,
                body: body.current.value,
            }
        })
        title.current.value = ''
        body.current.value = ''
    }

    return (
        <>
            <div className='app'>
                <h1>Make a Note</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>whats your title:
                            <input type="text" ref={title} />
                        </label>
                    </div>
                    <div>

                        <label>whats your note about:
                            <input type="text" ref={body} />
                        </label>
                    </div>
                    <button type='submit'>submit note</button>
                </form>
            </div>
            {note.title && <div className='app'>
                <h1>{note.title}</h1>
                <h2>{note.body}</h2>
            </div>}
        </>
    )
}

export default CreateNote