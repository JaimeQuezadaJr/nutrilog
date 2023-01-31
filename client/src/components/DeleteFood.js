import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DeleteFood = ({setLoggedIn}) => {
    const [user, setUser] = useState("");
    const [food, setFood] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get('http://localhost:8000/api/current-user', { withCredentials: true })
          .then((res) => {
            console.log(res.data)
            setUser(res.data.firstName);
            setLoggedIn(true);
            
            //TODO get all three goals from backend /api/nutrition/user/:id
            axios.get(`http://localhost:8000/api/nutrition/user/${res.data._id}`, { withCredentials: true})
            .then(res => {
                console.log(res.data)
              setFood(res.data)
            })
            .catch(err => console.log(err));
            
          })
          .catch((err) => {
            console.log(err)
            navigate('/');
          }
          ); 
      }, []);
    const deleteMovie = (id) => {
        axios
          .delete(`http://localhost:8000/api/nutrition/${id}`, { withCredentials: true})
          .then((res) => {
            navigate('/dashboard');
          })
          .catch((err) => console.log(err));
      };
      const dateParse = (date) => {
        let dateObj = new Date(date);
        let day = `0${dateObj.getDate()}`.slice(-2);
        let month = `0${dateObj.getMonth() + 1}`.slice(-2);
        return `${month}/${day}/${dateObj.getFullYear()}`;
      }
  return (
    <Container>
        <Row className='form'>
            <Col>
            <Card border="light" >
                        <Card.Header>Foods</Card.Header>
                        <Card.Body>
        
    <div>
                    {food.map((foods, index)=>
                            <div key={index} className='delete-food'>
                                <p className='m-0'>{foods.foodTitle}<span className='small-date ms-3'>{dateParse(foods.createdAt)}</span></p>
                                
                                <Button variant="outline-danger" className='m-1' size='sm' onClick = {(e) => {deleteMovie(foods._id)}}>Delete</Button>
                            </div>
                    )}
                    </div>
                    </Card.Body>
                    </Card>
                    </Col>
                    </Row>
    </Container>
  )
}

export default DeleteFood