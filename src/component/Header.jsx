import React, { useEffect, useState } from 'react'
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

    const [theme, setTheme] = useState('light')

    function changeTheme(){
        setTheme( theme === 'light'? 'dark': 'light')
    }

    useEffect(() => {
        const root = document.querySelector(':root');

        const componentstChangeStyle = [
            'card-background',
            'text',
            'body-background'
        ];

        componentstChangeStyle.forEach(components => {
            root.style.setProperty(`--${components}-default`, `var(--${components}-${theme})`)
        })
    }, [theme])

  return (
    <div className='Header'>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">React Weather</Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                <Nav style={styleHeader.center}>
                <i style={styleHeader.change} className="bi bi-sun" onClick={changeTheme}></i>
                <NavDropdown title="Выбрать город" id="collasible-nav-dropdown" onClick={changeTheme}>
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
