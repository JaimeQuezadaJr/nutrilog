import { useEffect, useState } from 'react'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { motion } from 'framer-motion';

const UserRegistration = ({ setLoggedIn }) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      age: 0,
      sex:'',
      email: '',
      password: '',
      confirmPassword: '',
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
        .post('http://localhost:8000/register', user, { withCredentials: true })
        .then((res) => {
          setLoggedIn(true);
          navigate('/dashboard');
        })
        .catch((err) => setErrors(err.response.data.errors));
    };

    useEffect(() => {
      window.scrollTo(0,0)
    },[])
  
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
      <div className='background-image'>
          <Container>
            <Row>
            <Form onSubmit={handleSubmit} className='form mb-5'>
            <Form.Group className="mb-3 col-md-4" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='firstName' placeholder="Enter first name" value={user.firstName} onChange={handleChange} required />
                {errors.firstName && <Form.Text className='text-danger'>{errors.firstName.message}</Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3 col-md-4" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lastName' placeholder="Enter last name" value={user.lastName} onChange={handleChange} required />
                {errors.lastName && <Form.Text className='text-danger'>{errors.lastName.message}</Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3 col-md-4" controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" name='age' placeholder="Enter age" value={user.age} onChange={handleChange} required />
                <Form.Text className="text-muted">
                  Nutritional goals for each age/sex group used in assessing adequacy of USDA Food Patterns at various calorie levels.
                </Form.Text>
                {errors.age && <Form.Text className='text-danger'>{errors.age.message}</Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3 col-md-4" controlId="sex">
                <Form.Label>Sex</Form.Label>
                <Form.Select type="string" name='sex' placeholder="Enter sex" value={user.sex} onChange={handleChange} required>
                  <option>Select Sex</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  </Form.Select>
                  <Form.Text className="text-muted">
                  Daily nutritional goals for age-sex groups based on dietary reference intakes & dietary guidelines recommendations.
                </Form.Text>
                {errors.sex && <Form.Text className='text-danger'>{errors.sex.message}</Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3 col-md-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" value={user.email} onChange={handleChange} required />
                
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                {errors.email && <Form.Text className='text-danger'><br></br> {errors.email.message}</Form.Text>}
                
              </Form.Group>
              
  
            <Form.Group className="mb-3 col-md-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Enter Password" value={user.password} onChange={handleChange} />
              {errors.password && <Form.Text className='text-danger'>{errors.password.message}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name='confirmPassword' placeholder="Must Match Password" value={user.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <Form.Text className='text-danger'>{errors.confirmPassword.message}</Form.Text>}
            </Form.Group>
            <Button size='sm' variant="outline-primary" type="submit">
              Register
            </Button>
            </Form>
            </Row>
          </Container>
          </div>
          </motion.div>
    );
  };
  
  export default UserRegistration;