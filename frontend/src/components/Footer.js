import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col>
        <footer className='text-center py-3'>
            Copyright &copy; ProShop
        </footer>
        </Col>
        </Row>
        </Container>
    )
}

export default Footer
