import React from 'react'
import Card from 'react-bootstrap/Card'

const infoStyles = {
    card:{
        width: '100%',
        height: 'auto',
        boxShadow: '0 0 7px #666',
        borderRadius: '30px'
    },
    text:{
        fontSize: '20px'
    },
    title:{
        fontSize: '25px'
    }

}

export default function Information() {
  return (
    <div className='p-2'>
        <Card style={infoStyles.card}>
        <Card.Body>
            <Card.Title style={infoStyles.title}>Information</Card.Title>
            <Card.Text>
                <p style={infoStyles.text}>Hi, friend! This is a mini-application in which you can watch the weather for the current day in any city in the world.</p>
                <p style={infoStyles.text}>I hope you appreciate this work. To see information about the weather in any city, at the top of the page, enter the name of the city and press "Enter"</p>
                <p style={infoStyles.text}>If the data is not updated, then most likely you entered the wrong city name. Please recheck it...</p>
                <p style={infoStyles.text}>Good luck!</p>



            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}
