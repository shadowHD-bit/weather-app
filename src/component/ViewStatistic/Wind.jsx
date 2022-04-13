import React from 'react'


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
        margin: '5px'
    }
}

export default function Wind() {
  return (
    <div className='wind' style={windStyle.temperature}>
        <p style={windStyle.p}>Ветер: <span style={windStyle.span}>3 м/c</span></p>
    </div>
  )
}
