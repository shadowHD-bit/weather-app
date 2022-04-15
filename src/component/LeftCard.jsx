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
        boxShadow: '0 0 7px #666',
        borderRadius: '30px'

    },
    bigTemp:{
        fontSize: '40px',
        color: 'grey',
        fontWeight: 'bold',
    },
    day:{
        textAlign: 'center'
    },
    textDay:{
        fontSize: '20px',
        color: 'grey'
    },
    p:{
        fontSize:'20px',
        color:'grey'
    },
    span:{
        fontSize:'22px',
    },
    img:{
        marginTop: '10px'
    },
    br:{
        borderRadius: '30px'
    }
}

export default function LeftCard(props) {

    const temp = props.data.temperature
    const location = props.data.location
    const img = props.data.img
    const localtime = props.data.localtime
    const description = props.data.description


  return (
    <div className='leftCard' style={leftCardStyles.leftCard}>
        <Card style={leftCardStyles.card}>
        <Card.Body style={leftCardStyles.br}>
            <Card.Title>Main Information</Card.Title>
            <Card.Text>
                <Container>
                    <Row>
                        <Col md={5} style={leftCardStyles.day}>
                            <img style={leftCardStyles.img} src={img} alt="" />
                            <p><span style={leftCardStyles.textDay}>{description}</span></p>
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
                        <p style={leftCardStyles.p}>Date/Time: <span style={leftCardStyles.span}>{localtime}</span></p>
                    </Col>
                </Container>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

