import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Header() {
  return (
    <div className='Header'>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React Weather</Navbar.Brand>
                    <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                <Nav>
                <NavDropdown title="Выбрать город" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Томск</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Белово</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Кемерово</NavDropdown.Item>
                </NavDropdown>                    
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
