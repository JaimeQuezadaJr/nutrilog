import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';

const Chat = () => {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        socket.on('connection', () => {
            console.log('Connected');
        })
        return() => socket.disconnect(true);
    })
  return (
    <div>
    <Container>
        <Row>
            <Col className='form'>
            </Col>
        </Row>
        <Row>
            <div className='main'>CHAT</div>
        </Row>
        </Container>
        </div>
  )
}

export default Chat;