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

export default function Wind(props) {

    const wind = props.wind

  return (
    <div className='wind' style={windStyle.temperature}>
        <Col md={1} style={windStyle.center}>
            <img src="./images/wind.svg" alt="" style={windStyle.img}/>
        </Col>
        <Col md={11}>
            <p style={windStyle.p}>Wind Speed: <span style={windStyle.span}>{wind} km/hr</span></p>
        </Col>
    </div>
  )
}
