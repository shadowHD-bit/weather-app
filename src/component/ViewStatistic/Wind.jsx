import React from 'react'
import { Col } from 'react-bootstrap'


const windStyle = {
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

export default function Wind() {
  return (
    <div className='wind' style={windStyle.temperature}>
        <Col md={1} style={windStyle.center}>
            <img src="./images/wind.svg" alt="" style={windStyle.img}/>
        </Col>
        <Col md={11}>
            <p style={windStyle.p}>Ветер: <span style={windStyle.span}>3 м/c</span></p>
        </Col>
    </div>
  )
}
