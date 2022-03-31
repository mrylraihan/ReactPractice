import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link to={'/'}>NavBar</Link></Navbar.Brand>
                    <Nav className="me-auto">
                       <Nav.Link>
                           <Link to={'/Home'}>Home</Link>
                       </Nav.Link>
                       <Nav.Link>
                           <Link to={'/About'}>About</Link>
                       </Nav.Link>
                       <Nav.Link>
                           <Link to={'/Mission'}>Mission</Link>
                       </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header