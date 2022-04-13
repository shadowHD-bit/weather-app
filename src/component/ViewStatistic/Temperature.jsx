import React from 'react'


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
        margin: '5px'
    }
}

export default function Temperature() {
  return (
    <div className='temperature' style={temperatureStyle.temperature}>
        <p style={temperatureStyle.p}>Температура: <span style={temperatureStyle.span}>40 °С</span></p>
    </div>
  )
}
