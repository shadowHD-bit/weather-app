import React from 'react'
import { Container } from 'react-bootstrap'
import MiniCard from './MiniCard'

const styleListMiniCard = {
    list:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    
}

export default function ListMiniCard() {
  return (
    <div>
        <Container style={styleListMiniCard.list}>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
        </Container>
    </div>
  )
}
