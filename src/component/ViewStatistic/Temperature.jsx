import React from 'react'
import { Col } from 'react-bootstrap'


const temperatureStyle = {
    p:{
        fontSize: '20px',
        color: 'grey'
    },
    span:{
        fontSize: '25px',
        color: 'black'
    },
    temperature:{
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

export default function Temperature(props) {
    const temperature = (props.temperature)

  return (
    <div className='temperature' style={temperatureStyle.temperature}>
        <Col md={1} style={temperatureStyle.center}>
        <img src="./images/temp.svg" alt="" style={temperatureStyle.img}/> 
        </Col>
        <Col md={11}>
        <p style={temperatureStyle.p}>Temperature: <span style={temperatureStyle.span}>{temperature} °С</span></p>
        </Col>
    </div>
  )
}
