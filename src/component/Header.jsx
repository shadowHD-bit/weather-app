import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'


const styleHeader = {
    change: {
        height: '25px',
        fill: 'white',
        cursor: 'pointer'
    },
    i:{
        margin: '0px 15px'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}


export default function Header(props) {

    const {location, temperature, description, region, country, wind_speed, 
    pressure, precip, humidity, img} = (props.weatherData)

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
                <i style={styleHeader.i}>{location} </i>
                <Form className="d-flex" onSubmit={(e) => props.changeWeather(e)}>
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => props.changeLocation(e.target.value)}
                    />
                    <Button>Search</Button>
                </Form>      
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
