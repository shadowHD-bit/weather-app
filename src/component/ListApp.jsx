import React from 'react'
import { Container } from 'react-bootstrap'
import Information from './Information'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

const listAppStyles = {
    listApp: {
        display: 'flex',
        flexDirection: 'row'
    }
}

export default function ListApp(props) {

    const {location, temperature, localtime, description, region, country, wind_speed, 
        pressure, precip, humidity, img} = (props.weatherData)

  return (
    <div className='listApp'>
        <Container className='mt-5' style={listAppStyles.listApp}>
            <LeftCard data = {{temperature, location, img, localtime, description}}/>
            <RightCard data = {{wind_speed, pressure, precip, temperature}}/>
        </Container>
        <Container>
            <Information />
        </Container>
    </div>
  )
}
