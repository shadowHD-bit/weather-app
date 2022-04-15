import React from 'react'
import { Col } from 'react-bootstrap'


const preciritationStyle = {
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

export default function Preciritation(props) {

    const precip = props.precip

  return (
    <div className='preciritation' style={preciritationStyle.temperature}>
        <Col md={1} style={preciritationStyle.center}>
        <img src="./images/rain.svg" alt="" style={preciritationStyle.img}/>
        </Col>
        <Col md={11}>
        <p style={preciritationStyle.p}>Preciritation: <span style={preciritationStyle.span}>{precip} mm</span></p>
        </Col>
    </div>
  )
}
