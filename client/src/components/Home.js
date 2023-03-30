import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



const Home = ({loggedIn, setLoggedIn}) => {
    const navigate = useNavigate();
    const [btnLink, setBtnLink] = useState([]);


    useEffect(() => {
        axios
        .get('http://localhost:8000/api/current-user', { withCredentials: true })
        .then((res) => {
          setLoggedIn(true);
          setBtnLink(['/dashboard', 'Start Tracking']);
        })
        .catch((err) => {
          setLoggedIn(false);
          setBtnLink(['/login', 'Login']);
        });
      },[loggedIn])
          
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
    <div>
        <Container>
            <Row>
            
                <Col sm={{ span: 4, offset: 6 }} className='form' >
                        <Card.Body className='main'>
                        <Card.Title className='header'>Healthy Nutrition Diet</Card.Title>
                        </Card.Body>
                    
                </Col>
            </Row>
            
            <Row>
                <Col sm={{ span: 4, offset: 6 }} className='mb-1' >
                    <Card border="light" style={{ width: '18rem' }} >
                        <Card.Header>Nutrition Base</Card.Header>
                        <Card.Body>
                        <Card.Title>Log your nutrition <img className='rounded' src='/Buffer-Progress-Bar.jpg' alt="blueCircle" width={30} height={30} /></Card.Title>
                        <Card.Text>
                            Quick and easy way to view nutrition facts of your favorite foods and be able to track your diet with your own personal nutrition data base.
                        </Card.Text>
                        {loggedIn ?
                        <>
                        <Button size='sm' variant="outline-primary" onClick={() => navigate(btnLink[0])}>{btnLink[1]}</Button>
                        </>
                        :<>
                        <Button size='sm' variant="outline-primary" onClick={() => navigate(btnLink[0])}>{btnLink[1]}</Button>
                        <Button size='sm' variant="outline-primary" className='m-2' onClick={() => navigate('/register')}>Register</Button>
                        </>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {!loggedIn ?
            <Row>
                <Col sm={{ span: 4, offset: 6 }} className='mt-1'>
                    <div className='main'>
                        <Card.Header><span className='nutrientName'>Try it out!</span></Card.Header>
                        <Card.Body>
                        <Card.Text className='submain'>Search nutrition facts for some of your favorite foods!</Card.Text>
                        <Card.Text>
                            <Button size='sm' type="submit" variant='outline-primary' className='page-bottom' onClick={() => navigate('/nutrition')}>Search</Button>
                        </Card.Text>
                        </Card.Body>
                        </div>
                    
            </Col>
            
            </Row>
            :null}
        </Container>
    </div>
    </motion.div>
  )
}

export default Home;