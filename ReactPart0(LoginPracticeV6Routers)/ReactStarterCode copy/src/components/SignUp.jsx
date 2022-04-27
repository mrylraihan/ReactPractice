import React, { useState } from 'react'
import {Form, Button, Card} from "react-bootstrap"
import { Navigate } from 'react-router-dom'

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')




    const submitHandler = (e) =>{
        e.preventDefault();
        if(password === confirmPassword && email !== ''){
            props.getUser((prev)=>{
                return {...prev, email:email, name:name, password:password};
            });
            props.setIsTrue(true);
        }else{
            alert("Please try again! incorrect password and confirmation dont match!, or Something is Empty!")
        }
        setEmail('');
        setName('');
        setPassword('');
        setConfirmPassword('');

    };
    if(props.isTrue){
        return <Navigate to='/Home'/>
    }
    return (
        <div>
            <Card>
                <Card.Body>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                        Send the Name.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="ConfirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignUp