import React from 'react'
import { Container } from 'react-bootstrap'
import ButtonList from './ButtonList'
import LeftCard from './LeftCard'
import ListMiniCard from './ListMiniCard'
import RightCard from './RightCard'

const listAppStyles = {
    listApp: {
        display: 'flex',
        flexDirection: 'row'
    }
}

export default function ListApp(props) {

    const {location, temperature, observation_time, description, region, country, wind_speed, 
        pressure, precip, humidity, img} = (props.weatherData)

  return (
    <div className='listApp'>
        <Container className='mt-5' style={listAppStyles.listApp}>
            <LeftCard data = {{temperature, location, img, observation_time}}/>
            <RightCard />
        </Container>
        <Container>
            <ButtonList />
        </Container>
        <Container>
            <ListMiniCard />
        </Container>
    </div>
  )
}
