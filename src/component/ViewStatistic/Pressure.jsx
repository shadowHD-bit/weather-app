import React from 'react'


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
        margin: '5px'
    }
}

export default function Pressure() {
  return (
    <div className='presure' style={pressureStyle.pressure}>
        <p style={pressureStyle.p}>Давление: <span style={pressureStyle.span}>742 мм. ртутного столба</span></p>
    </div>
  )
}
