import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

const styleHeader = {
    change: {
        height: '25px',
        fill: 'white',
        cursor: 'pointer'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default function Header() {
  return (
    <div className='Header'>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">React Weather</Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                <Nav style={styleHeader.center}>
                <img id='changeTheme' src="./images/changeSun.svg" alt="" style={styleHeader.change}/>
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
