import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar';
import GoalList from './GoalList'
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NutritionSearch from "./NutritionSearch";



const GoalDashboard = ({setLoggedIn}) => {

    const navigate = useNavigate();
    const [btnLink, setBtnLink] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const [calories, setCalories] = useState(null);
    const [protein, setProtein] = useState(null);
    const [category, setCategory] = useState("Nutrition");
    const [complete, setComplete] = useState({});
    const [user, setUser] = useState("");
  
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
            console.log(res.data[0].foodName)
            setNutrition(res.data)
            {let sumCalories = 0;
              nutrition.map((nutrients) => sumCalories += nutrients.calories);
            console.log(sumCalories)
            setCalories(sumCalories)}

            {let sumProtein = 0;
              nutrition.map((nutrients) => sumProtein += nutrients.protein);
            console.log(sumProtein)
            setProtein(sumProtein)}
            
  
         
          })
          .catch(err => console.log(err));
          
        })
        .catch((err) => {
          console.log(err)
          navigate('/');
        }
        ); 
    }, [calories]);
    
    return (
      <div>
      <Container>
        <Row>
          <Col className="form">
            <Card>
              <Card.Header>Welcome {user} <span className="">01/24/2023</span></Card.Header>
                <Card.Body>
                  <ButtonGroup size="sm" className="mb-2">
                    <Button variant='outline-primary' active>Daily</Button>
                    <Button variant='outline-primary'>Weekly</Button>
                    <Button variant='outline-primary'>Monthly</Button>
                  </ButtonGroup>
                            
                  <div className="mb-2">
                  
                  
                    <Card.Text className="mb-1 nutrientName">Calories</Card.Text>
                    <ProgressBar variant="primary" now={calories} label={`${calories} kCal`} />
                   
                  
                  </div>
                  <div className="mb-2">
                   
                    
                    <Card.Text className="mb-1 nutrientName">Macronutrients</Card.Text>
                    <ProgressBar variant="danger" now={protein} label={`Protein ${protein}g`} />
                    {/* <ProgressBar variant="warning" now={nutrients['totalFat']} label={`Total Fat ${nutrients['totalFat']}g`} />
                    <ProgressBar variant="info" now={nutrients['carbohydrates']} label={`Carbohydrates ${nutrients['carbohydrates']}g`} />
                    <ProgressBar variant="primary" now={nutrients['dietaryFiber']} label={`Fiber ${nutrients['dietaryFiber']}g`} /> */}
                

                    
                  
                  </div>
                  <div className="mb-2">
                  <Card.Text className="mb-1 nutrientName">Minerals</Card.Text>
                    <ProgressBar variant="danger" now={30} label='Calcium' />
                    <ProgressBar variant="warning" now={50} label='Iron' />
                    <ProgressBar variant="info" now={60} label='Magnesium' />
                    <ProgressBar variant="primary" now={70} label='Phosphorus' />
                    <ProgressBar variant="success" now={60} label='Potassium' />
                    <ProgressBar variant="danger" now={80} label='Sodium' />
                    <ProgressBar variant="warning" now={90} label='Zinc' />
                    <ProgressBar variant="info" now={90} label='Copper' />
                    <ProgressBar variant="primary" now={90} label='Selenium' />
                  </div>
                  <div className="mb-3">
                  <Card.Text className="mb-1 nutrientName">Vitamins</Card.Text>
                    <ProgressBar variant="danger" now={30} label='Vitamin A' />
                    <ProgressBar variant="warning" now={50} label='Vitamin E' />
                    <ProgressBar variant="info" now={60} label='Vitamin D' />
                    <ProgressBar variant="primary" now={70} label='Vitamin C' />
                    <ProgressBar variant="success" now={60} label='Thiamin' />
                    <ProgressBar variant="danger" now={80} label='Riboflavin' />
                    <ProgressBar variant="warning" now={90} label='Niacin' />
                    <ProgressBar variant="info" now={90} label='Vitamin B-6' />
                    <ProgressBar variant="primary" now={40} label='Vitamin B-12' />
                    <ProgressBar variant="success" now={70} label='Choline' />
                    <ProgressBar variant="danger" now={20} label='Vitamin K' />
                    <ProgressBar variant="warning" now={90} label='Folate' />
                  </div>
                  <Button size="sm" variant="outline-primary" className="me-2">Update Nutrition</Button>
                  <Button size="sm" variant="outline-primary" className="me-2">Delete Foods</Button>
                  
                </Card.Body>
            </Card>
          </Col>
          </Row>
      </Container>
      <Row className="negative-form">
      <NutritionSearch setLoggedIn={setLoggedIn}></NutritionSearch>
      </Row>
      
      </div>
    )
  }
  export default GoalDashboard;

