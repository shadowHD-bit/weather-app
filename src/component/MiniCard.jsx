import React from 'react'
import Card from 'react-bootstrap/Card'

const styleMiniCard = { 
    miniCard: {
        width: 'auto',
        height: 'auto',
        margin: '5px',
    }
}

export default function MiniCard() {
  return (
    <div className='miniCard'>
        <Card style={styleMiniCard.miniCard}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}
