import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { motion } from 'framer-motion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ViewFood = ({setLoggedIn}) => {
    const [user, setUser] = useState("");
    const [food, setFood] = useState([]);
    const [foodHolder, setFoodHolder] = useState([]);
    const [dailyValue, setDailyValue] = useState(false);
    const [weeklyValue, setWeeklyValue] = useState(false);
    const [monthlyValue, setMonthlyValue] = useState(false);
    const [allValue, setAllValue] = useState(false);

    
    const current = new Date();


    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get('http://localhost:8000/api/current-user', { withCredentials: true })
          .then((res) => {
            setUser(res.data);
            setLoggedIn(true);
            
            axios.get(`http://localhost:8000/api/nutrition/user/${res.data._id}`, { withCredentials: true})
            .then(res => {
              setFood(res.data)
              setFoodHolder(res.data)
              setAllValue(true)
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

      const dailyChange = () => {
        setDailyValue(true);
        setWeeklyValue(false);
        setMonthlyValue(false);
        setAllValue(false);

        
        let arr = []
        foodHolder.map((foods) => {
          if (dateParse(foods.createdAt) === dateParse(new Date())){
            arr = [foods, ...arr]
          }
          
      })
      setFood(arr)
    }
      
      const weeklyChange = () => {
        setDailyValue(false);
        setWeeklyValue(true);
        setMonthlyValue(false);
        setAllValue(false);

        let arr = []
        current.setDate(current.getDate() - 7)
        foodHolder.map((foods) => {
          if (dateParse(foods.createdAt) >= dateParse(current.toDateString())){
            arr = [foods, ...arr]
            
          }
      })
      setFood(arr)
      }

      const monthlyChange = () => {
        setDailyValue(false);
        setWeeklyValue(false);
        setMonthlyValue(true);
        setAllValue(false);
        let arr = []
        current.setDate(current.getDate() - 30)
        foodHolder.map((foods) => {
          if (dateParse(foods.createdAt) >= dateParse(current.toDateString())){
            arr = [foods, ...arr]
            
          }
          
      })
      setFood(arr)
      }


      const allNutriment = () => {
        setDailyValue(false);
        setWeeklyValue(false);
        setMonthlyValue(false);
        setAllValue(true);
        setFood(foodHolder)
      }




  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
    <Container>
    <Row className='form'>
            <Col>
            <Card border="light" >
                        <Card.Header>Nutrition Base</Card.Header>
                        <Card.Body>
             
                        <Card.Title>All Nutriment <img className='rounded' src='/Buffer-Progress-Bar.jpg' alt="blueCircle" width={30} height={30} /></Card.Title>
                        <Card.Text>
                            View all foods consumed and their respective nutrition facts.
                        </Card.Text>
                        <ButtonGroup size="sm" className="mb-2">
                              <Button variant="outline-primary" onClick={allNutriment} active={allValue} >All Nutriment</Button>
                            </ButtonGroup>
                            <br></br>
                            <ButtonGroup size="sm" className="mb-2">
                              <Button variant="outline-primary" onClick={dailyChange} active={dailyValue}>Today</Button>
                              <Button variant="outline-primary" onClick={weeklyChange} active ={weeklyValue}>Last 7 Days</Button>
                              <Button variant="outline-primary" onClick={monthlyChange} active={monthlyValue}>Last 30 Days</Button>
                            </ButtonGroup>
                           
                      </Card.Body>
                    </Card>
            </Col>
          </Row>
        
        <div className='flex mt-2'>

         

                     
                {food.map((foods, index)=>

                <div key={index} >
                <Card className='page-bottom' border="light" style={{ width: '18rem' }}>
                    <Card.Header className='nutrientName'>{foods.foodTitle}</Card.Header>
                        <Card.Body>
                            
                            <Card.Text className="mb-0 nutrientName">Portion: {foods.portionSize} g</Card.Text>
                            <Card.Text className="mb-2 small-date">* Nutrient percentages based on portion size.</Card.Text>
                                <div className='foodScroll mb-3'>
                                <Card.Text className="mb-0 nutrientName">Calories</Card.Text>
                                <p className="m-0 small-date">{`Calories: ${foods.calories} kCal`}</p>
                                <ProgressBar className="" variant="primary" now={100} label={`${foods.calories} kCal`} />

                                <Card.Text className="mb-0 nutrientName">Water</Card.Text>
                                <p className="m-0 small-date">{`Water: ${foods.water} g`}</p>
                                <ProgressBar className="" variant="primary" now={((foods.water)/(foods.portionSize))*100} label={`${(((foods.water)/(foods.portionSize))*100).toFixed(0)} %`} />

                                <Card.Text className="mb-0 nutrientName">Macronutrients</Card.Text>
                                <p className="m-0 small-date">{`Protein: ${foods.protein} g`}</p>
                                <ProgressBar className="" variant="primary" now={((foods.protein)/(foods.portionSize))*100} label={`${(((foods.protein)/(foods.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Total Fat: ${foods.totalFat} g`}</p>
                                <ProgressBar variant="primary" now={((foods.totalFat)/(foods.portionSize))*100} label={`${(((foods.totalFat)/(foods.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Carbohydrates: ${foods.carbohydrates}g`}</p>
                                <ProgressBar variant="info" now={((foods.carbohydrates)/(foods.portionSize))*100} label={`${(((foods.carbohydrates)/(foods.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Fiber: ${foods.dietaryFiber} g`}</p>
                                <ProgressBar variant="primary" now={((foods.dietaryFiber)/(foods.portionSize))*100} label={`${(((foods.dietaryFiber)/(foods.portionSize))*100).toFixed(1)} %`} />

                                <Card.Text className="mb-0 nutrientName">Minerals</Card.Text>
                                <p className="m-0 small-date">{`Calcium: ${foods.calcium} mg`}</p>
                                <ProgressBar variant="danger" now={(((foods.calcium)/(foods.portionSize))*100)/1000} label={`${((((foods.calcium)/(foods.portionSize))*100)/1000).toFixed(1)} %`}/>
                                <p className="m-0 small-date">{`Iron: ${foods.iron} mg`}</p>
                                <ProgressBar variant="warning" now={(((foods.iron)/(foods.portionSize))*100)/1000} label={`${((((foods.iron)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Magnesium: ${foods.magnesium} mg`}</p>
                                <ProgressBar variant="info" now={(((foods.magnesium)/(foods.portionSize))*100)/1000} label={`${((((foods.magnesium)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Phosphorus ${foods.phosphorus} mg`}</p>
                                <ProgressBar variant="primary" now={(((foods.phosphorus)/(foods.portionSize))*100)/1000} label={`${((((foods.phosphorus)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Potassium: ${foods.potassium} mg`}</p>
                                <ProgressBar variant="success" now={(((foods.potassium)/(foods.portionSize))*100)/1000} label={`${((((foods.potassium)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Sodium ${foods.sodium} mg`}</p>
                                <ProgressBar variant="danger" now={(((foods.sodium)/(foods.portionSize))*100)/1000} label={`${((((foods.sodium)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Zinc: ${foods.zinc} mg`}</p>
                                <ProgressBar variant="warning" now={(((foods.zinc)/(foods.portionSize))*100)/1000} label={`${((((foods.zinc)/(foods.portionSize))*100)/1000).toFixed(1)}  %`} />
                                <p className="m-0 small-date">{`Copper: ${foods.copper} mg`}</p>
                                <ProgressBar variant="info" now={(((foods.copper)/(foods.portionSize))*100)/1000} label={`${((((foods.copper)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Selenium: ${foods.selenium} ug`}</p>
                                <ProgressBar variant="primary" now={(((foods.selenium)/(foods.portionSize))*100)/1000000} label={`${((((foods.selenium)/(foods.portionSize))*100)/1000000).toFixed(6)} %`} />

                                <Card.Text className="mb-0 nutrientName">Vitamins</Card.Text>
                                <p className="m-0 small-date">{`Vitamin A: ${foods.vitaminA} ug`}</p>
                                <ProgressBar variant="danger" now={((((foods.vitaminA)/(foods.portionSize))*100)/1000000)} label={`${((((foods.vitaminA)/(foods.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Vitamin E: ${foods.vitaminE} mg`}</p>
                                <ProgressBar variant="warning" now={(((foods.vitaminE)/(foods.portionSize))*100)/1000} label={`${((((foods.vitaminE)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin D: ${foods.vitaminD} ug`}</p>
                                <ProgressBar variant="info" now={((((foods.vitaminD)/(foods.portionSize))*100)/1000000)} label={`${((((foods.vitaminD)/(foods.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Vitamin C: ${foods.vitaminC} mg`}</p>
                                <ProgressBar variant="primary" now={((((foods.vitaminC)/(foods.portionSize))*100)/1000)} label={`${((((foods.vitaminC)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Thiamin: ${foods.thiamin} mg`}</p>
                                <ProgressBar variant="success" now={((((foods.thiamin)/(foods.portionSize))*100)/1000)} label={`${((((foods.thiamin)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Riboflavin: ${foods.riboflavin} mg`}</p>
                                <ProgressBar variant="danger" now={((((foods.riboflavin)/(foods.portionSize))*100)/1000)} label={`${((((foods.riboflavin)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Niacin: ${foods.niacin} mg`}</p>
                                <ProgressBar variant="warning" now={((((foods.niacin)/(foods.portionSize))*100)/1000)} label={`${((((foods.niacin)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin B-6: ${foods.vitaminB6} mg`}</p>
                                <ProgressBar variant="info" now={((((foods.vitaminB6)/(foods.portionSize))*100)/1000)} label={`${((((foods.vitaminB6)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin B-12: ${foods.vitaminB12} ug`}</p>
                                <ProgressBar variant="primary" now={(((foods.vitaminB12)/(foods.portionSize))*100)/1000000} label={`${((((foods.vitaminB12)/(foods.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Choline: ${foods.choline} mg`}</p>
                                <ProgressBar variant="success" now={((((foods.choline)/(foods.portionSize))*100)/1000)} label={`${((((foods.choline)/(foods.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin K: ${foods.vitaminK} ug`}</p>
                                <ProgressBar variant="danger" now={(((foods.vitaminK)/(foods.portionSize))*100)/1000000} label={`${((((foods.vitaminK)/(foods.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Folate ${foods.folate} ug`}</p>
                                <ProgressBar variant="warning" now={(((foods.folate)/(foods.portionSize))*100)/1000000} label={`${((((foods.folate)/(foods.portionSize))*100)/1000000).toFixed(6)} %`} />

                                <Card.Text className="mb-0 mt-2 nutrientName">Added on: {dateParse(foods.createdAt)}</Card.Text>
                                </div>
                                <Button variant="outline-primary"  size='sm' onClick={() => navigate(`/updatePortion/${foods._id}`)} >Update Portion</Button>
                                <Button variant="outline-danger" className='ms-1' size='sm' onClick = {(e) => {deleteMovie(foods._id)}}>Delete</Button>
                                <Button variant="outline-primary" size='sm' className='ms-1' onClick={() => navigate('/dashboard')} >Home</Button>
                        </Card.Body>
                </Card>
                    
                  
                    
          </div>         
    )}
                            
                              
            
        </div>

    </Container>
    </motion.div>
  )
}


export default ViewFood;