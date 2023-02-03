import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
            setUser(res.data);
            setLoggedIn(true);
            
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
        <div className='form'>
            
                
                            
                                {food.map((foods, index)=>
                               
                                
                                <Card key={index} className='m-1' border="light" style={{ width: '18rem', display:'inline-block' }}>
                                    <Card.Header>{foods.foodTitle}</Card.Header>
                                        <Card.Body>
                                            <Card.Text className='mb-2'>Added on: {dateParse(foods.createdAt)}</Card.Text>
                                            <Card.Text className='mb-2'>Portion: 100g</Card.Text>
                                                <div className='foodScroll mb-3'>
                                                <Card.Text className="mb-0 nutrientName">Calories</Card.Text>
                                                <p className="m-0 small-date">{`Calories: ${foods.calories} kCal`}</p>
                                                <ProgressBar className="" variant="primary" now={foods.calories} label={`${foods.calories} %`} />
                                                <Card.Text className="mb-0 nutrientName">Macronutrients</Card.Text>
                                                <p className="m-0 small-date">{`Protein: ${foods.protein} g`}</p>
                                                <ProgressBar className="" variant="primary" now={foods.protein} label={`${foods.protein} %`} />
                                                <p className="m-0 small-date">{`Total Fat: ${foods.totalFat} g`}</p>
                                                <ProgressBar variant="primary" now={foods.totalFat} label={`${foods.totalFat} %`} />
                                                <p className="m-0 small-date">{`Carbohydrates: ${foods.carbohydrates}g`}</p>
                                                <ProgressBar variant="info" now={foods.carbohydrates} label={`${foods.carbohydrates} %`} />
                                                <p className="m-0 small-date">{`Fiber: ${foods.dietaryFiber} g`}</p>
                                                <ProgressBar variant="primary" now={foods.dietaryFiber} label={`${foods.dietaryFiber} %`} />
                                                <Card.Text className="mb-0 nutrientName">Minerals</Card.Text>
                                                <p className="m-0 small-date">{`Calcium: ${foods.calcium} mg`}</p>
                                                <ProgressBar variant="danger" now={foods.calcium} label={`${foods.calcium} %`}/>
                                                <p className="m-0 small-date">{`Iron: ${foods.iron} mg`}</p>
                                                <ProgressBar variant="warning" now={foods.iron} label={`${foods.iron} %`} />
                                                <p className="m-0 small-date">{`Magnesium: ${foods.magnesium} mg`}</p>
                                                <ProgressBar variant="info" now={foods.magnesium} label={`${foods.magnesium} %`} />
                                                <p className="m-0 small-date">{`Phosphorus ${foods.phosphorus} mg`}</p>
                                                <ProgressBar variant="primary" now={foods.phosphorus} label={`${foods.phosphorus} %`} />
                                                <p className="m-0 small-date">{`Potassium: ${foods.potassium} mg`}</p>
                                                <ProgressBar variant="success" now={foods.potassium} label={`${foods.potassium} %`} />
                                                <p className="m-0 small-date">{`Sodium ${foods.sodium} mg`}</p>
                                                <ProgressBar variant="danger" now={foods.sodium} label={`${foods.sodium} %`} />
                                                <p className="m-0 small-date">{`Zinc: ${foods.zinc} mg`}</p>
                                                <ProgressBar variant="warning" now={foods.zinc} label={`${foods.zinc} %`} />
                                                <p className="m-0 small-date">{`Copper: ${foods.copper} mg`}</p>
                                                <ProgressBar variant="info" now={foods.copper} label={`${foods.copper} %`} />
                                                <p className="m-0 small-date">{`Selenium: ${foods.selenium} ug`}</p>
                                                <ProgressBar variant="primary" now={foods.selenium} label={`${foods.selenium} %`} />
                
                                                
                                                </div>
                                                <Button variant="outline-danger"  size='sm' onClick = {(e) => {deleteMovie(foods._id)}}>Delete</Button>
                                        </Card.Body>
                                </Card>
                                    
                                  
                                    
                                  
                    )}
                            
               
            
        </div>

    </Container>
  )
}


export default DeleteFood;