import React from 'react'
import Card from 'react-bootstrap/Card'
import Temperature from './ViewStatistic/Temperature'
import Pressure from './ViewStatistic/Pressure'
import Preciritation from './ViewStatistic/Precipitation'
import Wind from './ViewStatistic/Wind'


const leftCardStyles = {
    leftCard:{
        width: '60%',
        height: 'auto',
        padding: '10px'
    },
    card: {
        width: '100%',
        height: '20rem'
    }
}

export default function LeftCard() {
  return (
    <div className='leftCard' style={leftCardStyles.leftCard}>
        <Card style={leftCardStyles.card}>
        <Card.Body>
            <Card.Title>Основные показатели</Card.Title>
            <Card.Text>
                <Temperature />
                <Pressure />
                <Preciritation />
                <Wind />
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

