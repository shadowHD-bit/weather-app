import React from 'react'
import Card from 'react-bootstrap/Card'
import Temperature from './ViewStatistic/Temperature'
import Pressure from './ViewStatistic/Pressure'
import Preciritation from './ViewStatistic/Precipitation'
import Wind from './ViewStatistic/Wind'


const rightCardStyles = {
    rightCard:{
        width: '60%',
        height: 'auto',
        padding: '10px',
    },
    card: {
        width: '100%',
        height: '20rem',
        boxShadow: '0 0 7px #666',
    },
    textSect:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}

export default function RightCards(props) {

    const {temperature, wind_speed, pressure, precip} = (props.data)

  return (
    <div className='leftCard' style={rightCardStyles.rightCard}>
        <Card style={rightCardStyles.card}>
        <Card.Body>
            <Card.Title>Основные показатели</Card.Title>
            <Card.Text style={rightCardStyles.textSect}>
                <Temperature temperature={temperature}/>
                <Pressure pressure = {pressure}/>
                <Preciritation precip = {precip}/>
                <Wind wind={wind_speed}/>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

