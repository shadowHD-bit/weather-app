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
        height: '20rem'
    },
    bigTemp:{
        fontSize: '40px',
        color: 'blue'
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

export default function LeftCard() {
  return (
    <div className='leftCard' style={leftCardStyles.leftCard}>
        <Card style={leftCardStyles.card}>
        <Card.Body>
            <Card.Title>Основная информация</Card.Title>
            <Card.Text>
                <Container>
                    <Row>
                        <Col md={5} style={leftCardStyles.day}>
                            <img src="./images/left_cloud_sun.svg" alt="" />
                            <p><span style={leftCardStyles.textDay}>Сегодня</span></p>

                        </Col>
                        <Col md={7}>
                            <p><span style={leftCardStyles.bigTemp}>+20 °С</span></p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Col>
                        <p style={leftCardStyles.p}>Город: <span style={leftCardStyles.span}>Томск</span></p>
                    </Col>
                    <Col>
                        <p style={leftCardStyles.p}>Время: <span style={leftCardStyles.span}>18:54</span></p>
                    </Col>
                </Container>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

