import React, { useRef } from 'react'
import {Button, Form} from 'react-bootstrap'

const LoginPage = ({ setUser }) => {
    // const [user, setUser] = useState({})
    const email = useRef()
    const password = useRef()
    
    const submitHandler = (e)=>{
        e.preventDefault()
        setUser({
                email: email.current.value,
                password: password.current.value 
            })
            email.current.value = ''
            password.current.value = ''
    }

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={password}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage