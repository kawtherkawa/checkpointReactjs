import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './navigation.css';
const Navigation = () => {
    return (
        <div>
            <Navbar  className='bar' >
                <Container className='cont'>
                    <Navbar.Brand className='logo' href="#home"><h2>My</h2> <span>Portfolio</span></Navbar.Brand>
                    <Nav >
                        <Nav.Link  className='logo' href="#home">About Me</Nav.Link>
                        <Nav.Link href="#Skills" className='logo' >Skills</Nav.Link>
                        <Nav.Link href="#Contact" className='logo' >Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation