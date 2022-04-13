import React from 'react'
import { Col } from 'react-bootstrap'

const pressureStyle = {
    p:{
        fontSize: '20px',
        color: 'grey'
    },
    span:{
        fontSize: '25px',
        color: 'black'
    },
    pressure: {
        margin: '5px',
        display: 'flex',
        flexDirection: 'row'
    },
    img:{
        height: '40px',
        width: 'auto'
    },
    center:{
        display: 'flex',
        justifyContent: 'center'
    }
}

export default function Pressure() {
  return (
    <div className='presure' style={pressureStyle.pressure}>
        <Col md={1} style={pressureStyle.center}>
        <img src="./images/pressure.svg" alt="" style={pressureStyle.img}/>
        </Col>
        <Col md={11}>
        <p style={pressureStyle.p}>Давление: <span style={pressureStyle.span}>742 мм. ртутного столба</span></p>
        </Col>
    </div>
  )
}
