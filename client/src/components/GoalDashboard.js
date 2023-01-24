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


const GoalDashboard = ({setLoggedIn}) => {

    const navigate = useNavigate();
    const [goals, setGoals] = useState([]);
    const [category, setCategory] = useState("Nutrition");
    const [complete, setComplete] = useState({});
    const [user, setUser] = useState("");
  
    // useEffect(() => {
    //   axios
    //     .get('http://localhost:8000/api/current-user', { withCredentials: true })
    //     .then((res) => {
    //       console.log(res.data)
    //       setUser(res.data.firstName);
    //       setLoggedIn(true);
          
    //       //TODO get all three goals from backend
    //       axios.get(`http://localhost:8000/api/${category}/user/${res.data._id}`, { withCredentials: true})
    //       .then(res => {
    //         console.log(res.data)
    //         setGoals(res.data)
  
    //         let tempComplete = {};
    //         res.data.map((goal) => tempComplete[goal._id] = goal.complete);
    //         setComplete(tempComplete);
    //       })
    //       .catch(err => console.log(err));
          
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       navigate('/');
    //     }
    //     ); 
    // }, [category]);
    
    return (
      <div className="background-dashboard">
      <Container>
        <Row>
          <Col className="form">
            <Card>
              <Card.Header>Welcome Lisa</Card.Header>
                <Card.Body>
  
                  
                  <div className="mb-2">
                    <Card.Text className="mb-1 nutrientName">Calories</Card.Text>
                    <ProgressBar variant="primary" now={30} label='Calories' />
                  </div>
                  <div className="mb-2">
                    <Card.Text className="mb-1 nutrientName">Macronutrients</Card.Text>
                    <ProgressBar variant="danger" now={30} label='Protein' />
                    <ProgressBar variant="warning" now={50} label='Total Fat' />
                    <ProgressBar variant="info" now={60} label='Carbohydates' />
                    <ProgressBar variant="primary" now={70} label='Sodium' />
                    <ProgressBar variant="success" now={80} label='Dietary Fiber' />
                    <ProgressBar variant="danger" now={90} label='Linoleic acid' />
                    <ProgressBar variant="warning" now={20} label='Linolenic acid' />
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
                  <Button size="sm" variant="outline-primary" className="me-2">Daily</Button>
                  <Button size="sm" variant="outline-primary" className="me-2">Weekly</Button>
                  <Button size="sm" variant="outline-primary">Monthly</Button>
                </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row>
            <Col className="mt-3">
            <Card>
              <Card.Header>Nutrition</Card.Header>
                <Card.Body>
                  <Card.Title>Add food</Card.Title>
                  <Card.Text>
                    Record the food you have consumed to keep track of your nutrition
                  </Card.Text>
                  <Button size="sm" variant="outline-primary">Add</Button>
                </Card.Body>
            </Card>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3 page-bottom">
              <Card>
                <Card.Header>Nutrition</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button size="sm" variant="outline-primary">Go somewhere</Button>
                  </Card.Body>
              </Card>
              </Col>
          </Row>

        
      </Container>
      </div>
    )
  }
  export default GoalDashboard;

  // <Container className="form">
  //       <div className="my-3">
  //         <h3>Welcome {user} !</h3>
  //       </div>
  //         <ButtonGroup className="">
  //           <Button variant="success" onClick={ (e) => setCategory(e.target.value) } value={'Nutrition'}>Nutrition</Button>
  //           <Button onClick={ (e) => setCategory(e.target.value) } value={'Fitness'}>Fitness</Button>
  //           <Button variant="light" onClick={ (e) => setCategory(e.target.value) } value={'Mindfulness'}>Mindfulness</Button>
  //         </ButtonGroup>
  //       <GoalList setGoals={setGoals} goals={goals} category={category} complete={complete} setComplete={setComplete}/>
  //       {category === "Nutrition" ?
  //       <Card className="my-5 col-lg-6">
  //       <Card.Img variant="top" src="/breakfast-image.webp" />
  //       <Card.Body>
  //         <Card.Title>Nutritious Recipes</Card.Title>
  //         <Card.Text>
  //           Explore new delicious recipes from the USDA!
  //         </Card.Text>
  //         <Button variant="primary" onClick={() => navigate('//www.nutrition.gov/recipes')}>View</Button>
  //       </Card.Body>
  //     </Card> :category ==="Fitness"?
  //     <Card className="my-5 col-lg-6">
  //     <Card.Img variant="top" src="https://cdn.wallpapersafari.com/1/59/PTymOS.jpg" />
  //     <Card.Body>
  //       <Card.Title>Workout Routines</Card.Title>
  //       <Card.Text>
  //         Explore workout routines!
  //       </Card.Text>
  //       <Button variant="primary" onClick={() => navigate('//www.muscleandstrength.com/workout-routines')}>View</Button>
  //     </Card.Body>
  //     </Card>
  //     :category ==="Mindfulness" ?
  //     <Card className="my-5 col-lg-6">
  //     <Card.Img variant="top" src="https://wallpaperaccess.com/full/3445589.jpg" />
  //     <Card.Body>
  //       <Card.Title>Mindfulness Routines</Card.Title>
  //       <Card.Text>
  //         Explore new meditation techniques from UCLA Health!
  //       </Card.Text>
  //       <Button variant="primary" onClick={() => navigate('//www.uclahealth.org/marc/mindful-meditations')}>View</Button>
  //     </Card.Body>
  //     </Card>: null 
  //   }
  //     </Container>