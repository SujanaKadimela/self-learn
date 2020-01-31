import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { LoginInfo } from './LoginInfo';
import './styles/MainLoginPage.scss'
import { LoginDetails } from './LoginDetails';

export class MainLoginPage extends React.Component {
    render() {
        return <Container>
            <Row className='main-login'>
                <Col className='main-login__info'>
                    <LoginInfo />
                </Col>
                <Col  className='main-login__details' >
                    <LoginDetails />
                </Col>
            </Row>
        </Container>
    }
}