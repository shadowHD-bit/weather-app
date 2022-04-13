import React from 'react'
import Card from 'react-bootstrap/Card'


const leftCardStyles = {
    leftCard:{
        width: '40%',
        height: 'auto',
        padding: '10px'
    },
    card: {
        width: '100%',
        height: 'auto'
    }
}

export default function LeftCard() {
  return (
    <div className='leftCard' style={leftCardStyles.leftCard}>
        <Card style={leftCardStyles.card}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    </div>
  )
}

