import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


const leftCardStyles = {
    leftCard:{
        width: '40%',
        height: 'auto',
        padding: '10px'
    },
    card: {
        width: '100%',
        height: '20rem',
        boxShadow: '0 0 7px #666'
    },
    bigTemp:{
        fontSize: '40px',
        color: 'blue',
        fontWeight: 'bold',
    },
    day:{
        textAlign: 'center'
    },
    textDay:{
        fontSize: '30px',
        color: 'grey'
    },
    p:{
        fontSize:'20px',
        color:'grey'
    },
    span:{
        fontSize:'22px',
        color:'black'
    }
}

export default function LeftCard(props) {

    const temp = props.data.temperature
    const location = props.data.location
    const observation_time = props.data.observation_time
    const localtime = props.data.localtime


  return (
    <div className='leftCard' style={leftCardStyles.leftCard}>
        <Card style={leftCardStyles.card}>
        <Card.Body>
            <Card.Title>Main Information</Card.Title>
            <Card.Text>
                <Container>
                    <Row>
                        <Col md={5} style={leftCardStyles.day}>
                            <img src="./images/left_cloud_sun.svg" alt="" />
                            <p><span style={leftCardStyles.textDay}>Today</span></p>

                        </Col>
                        <Col md={7}>
                            <p className='pt-3'><span style={leftCardStyles.bigTemp}>{temp} °С</span></p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Col>
                        <p style={leftCardStyles.p}>Location: <span style={leftCardStyles.span}>{location}</span></p>
                    </Col>
                    <Col>
                        <p style={leftCardStyles.p}>Time: <span style={leftCardStyles.span}>{observation_time}</span></p>
                    </Col>
                </Container>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

