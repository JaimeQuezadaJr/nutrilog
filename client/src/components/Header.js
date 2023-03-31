import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { motion } from 'framer-motion';


const Header = ({loggedIn, setLoggedIn}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
      
    useEffect(() => {
      axios
        .get('http://localhost:8000/api/current-user', { withCredentials: true })
        .then((res) => {
          setUser(res.data);
          setLoggedIn(true);
        })
        .catch((err) => console.log());
    }, [loggedIn])
  
    const onLogOut = () => {
      axios
      .post('http://localhost:8000/logout',{}, { withCredentials: true })
      .then((res) => {
          setUser(null);
          setLoggedIn(false);
          navigate('/')
      })
      .catch((err) => console.log(err));
    };
  
    return (
      <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
      <Navbar bg="light" variant='light' expand='sm' className='fixed-top'>
        <Container>
          <Navbar.Brand as={Link} to="/"><img
                alt=""
                src="/nutribase-icon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}nutrilog</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {loggedIn ? (
                <Nav className=" justify-contend-end">
                  <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
                  <Nav.Link as={Link} to="/nutrition">Search</Nav.Link>
                  <Nav.Link onClick={onLogOut}>Logout</Nav.Link>
              </Nav>
            ) : (
                <Nav className=" justify-contend-end">
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/register">Register</Nav.Link>
                  <Nav.Link as={Link} to="/nutrition">Search</Nav.Link>
                </Nav>
            )}
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </motion.div>
      <div className="footer fixed-bottom"></div>
      </>
      
    );
  }
  
  export default Header;