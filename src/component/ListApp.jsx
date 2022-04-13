import React from 'react'
import { Container } from 'react-bootstrap'
import LeftCard from './LeftCard'
import ListMiniCard from './ListMiniCard'
import RightCard from './RightCard'

const listAppStyles = {
    listApp: {
        display: 'flex',
        flexDirection: 'row'
    }
}

export default function ListApp() {
  return (
    <div className='listApp'>
        <Container className='mt-5' style={listAppStyles.listApp}>
            <LeftCard />
            <RightCard />
        </Container>
        <Container>
            <ListMiniCard />
        </Container>
    </div>
  )
}
