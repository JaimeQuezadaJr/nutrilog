import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { motion } from 'framer-motion';

const UserLogin = ({ setLoggedIn }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    const [errors, setErrors] = useState({})
    const [user, setUser] = useState({
      email: '',
      password: '',
    });
    const handleChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post('http://localhost:8000/login', user, { withCredentials: true })
        .then((res) => {
          setLoggedIn(true);
          navigate('/dashboard');
        })
        .catch((err) => setErrors(err.response));
    };
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
      <div className='background-image'>
        
          <Container>
            <Row>
          <Form onSubmit={handleSubmit} className="form"> 
            <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={user.email} onChange={handleChange} required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
  
            <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required/>
              {errors.data && <Form.Text className='text-danger'>{errors.data.error}</Form.Text>}
            </Form.Group>
            <Button size='sm' variant="outline-primary" type="submit">
              Login
            </Button>
            </Form>
            </Row>
          </Container>
        
        </div>
        </motion.div>
    );
  };
  
  export default UserLogin;