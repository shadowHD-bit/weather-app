import React from 'react'


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
        margin: '5px'
    }
}

export default function Preciritation() {
  return (
    <div className='preciritation' style={preciritationStyle.temperature}>
        <p style={preciritationStyle.p}>Осадки: <span style={preciritationStyle.span}>Без Осадков</span></p>
    </div>
  )
}
