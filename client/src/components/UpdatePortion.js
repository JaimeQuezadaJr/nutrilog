import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { motion } from 'framer-motion';

const UpdatePortion = ({setLoggedIn}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [btnLink, setBtnLink] = useState([]);
    const [food, setFood] = useState([]);
    const[foodQuery, setFoodQuery] = useState("");
    const [foodIndex, setFoodIndex] = useState(false);
    const [nutrients, setNutrients] = useState([]);
    const [foodMeasure, setFoodMeasure] = useState([]);
    const [foodName, setFoodName] = useState('');
    const [portion, setPortion] = useState(100);
    const [nutritionFacts, setNutritionFacts] = useState(
        {
            portionSize:0,
            calories:0,
            water:0,
            foodTitle:'',
            protein:0,
            totalFat:0,
            carbohydrates:0,
            dietaryFiber:0,
            calcium:0,
            iron:0,
            magnesium:0,
            phosphorus:0,
            potassium:0,
            sodium:0,
            zinc:0,
            copper:0,
            selenium:0,
            vitaminA:0,
            vitaminE:0,
            vitaminD:0,
            vitaminC:0,
            thiamin:0,
            riboflavin:0,
            niacin:0,
            vitaminB6:0,
            vitaminB12:0,
            choline:0,
            vitaminK:0,
            folate:0,
        },
    );
    useEffect(() => {
        axios
          .get('http://localhost:8000/api/current-user', { withCredentials: true })
          .then((res) => {
            console.log(res.data)

            setLoggedIn(true);
            
            axios.get(`http://localhost:8000/api/nutrition/${id}`, { withCredentials: true})
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


    const handleSubmit = (e) => {
        e.preventDefault();
        for(let i=0; i<67; i++) {
            if (e.target[i].name === 'Protein') {
                setNutritionFacts(previousInputs =>({ ...previousInputs, protein: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Total lipid (fat)') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, totalFat: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Carbohydrate, by difference') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, carbohydrates: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Energy') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, calories: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Water') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, water: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Fiber, total dietary') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, dietaryFiber: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Calcium, Ca') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, calcium: e.target[i].value }));
              } else if (e.target[i].name === 'Iron, Fe') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, iron: e.target[i].value }));
              } else if (e.target[i].name === 'Magnesium, Mg') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, magnesium: e.target[i].value }));
              } else if (e.target[i].name === 'Phosphorus, P') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, phosphorus: e.target[i].value }));
              } else if (e.target[i].name === 'Potassium, K') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, potassium: e.target[i].value }));
              } else if (e.target[i].name === 'Sodium, Na') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, sodium: e.target[i].value }));
              } else if (e.target[i].name === 'Zinc, Zn') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, zinc: e.target[i].value }));
              } else if (e.target[i].name === 'Copper, Cu') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, copper: e.target[i].value }));
              } else if (e.target[i].name === 'Selenium, Se') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, selenium: e.target[i].value }));
              } else if (e.target[i].name === 'Vitamin A, RAE') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminA: e.target[i].value }));
              } else if (e.target[i].name === 'Vitamin E (alpha-tocopherol)') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminE: e.target[i].value }));
              } else if (e.target[i].name === 'Vitamin D (D2 + D3)') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminD: e.target[i].value }));
              } else if (e.target[i].name === 'Vitamin C, total ascorbic acid') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminC: e.target[i].value }));
              } else if (e.target[i].name === 'Thiamin') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, thiamin: e.target[i].value }));
              } else if (e.target[i].name === 'Riboflavin') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, riboflavin: e.target[i].value }));
              } else if (e.target[i].name === 'Niacin') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, niacin: e.target[i].value }));
              } else if (e.target[i].name === 'Vitamin B-6') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminB6: e.target[i].value }));
              } else if (e.target[i].name === 'Vitamin B-12') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminB12: e.target[i].value }));
              } else if (e.target[i].name === 'Choline, total') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, choline: e.target[i].value }));
              } else if (e.target[i].name === 'Vitamin K (phylloquinone)') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminK: e.target[i].value }));
              } else if (e.target[i].name === 'Folate, total') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, folate: e.target[i].value }));
              } else if (e.target[i].name === 'foodName') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, foodTitle: e.target[i].value }));
              } else if (e.target[i].name === 'portion') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, portionSize: e.target[i].value }));
              }
          }
    }

    useEffect(() => {
        axios
        .post('http://localhost:8000/api/nutrition', nutritionFacts, {withCredentials:true}) 
        .then((res) => {
          console.log(res.data);
          navigate('/dashboard');
        })
        .catch((err) => console.log(err));
      
      },[nutritionFacts]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
    <Container>
        
        <div className='form flex'>
                     

                <Card className='page-bottom' border="light" style={{ width: '18rem' }}>
                    <Card.Header className='nutrientName'>{food.foodTitle}</Card.Header>
                        <Card.Body>
                            <Card.Text className='mb-2'>Added on: {dateParse(food.createdAt)}</Card.Text>
                            <Card.Text className='mb-2'>Portion: {food.portionSize} g</Card.Text>
                                <div className='foodScroll mb-3'>
                                <Card.Text className="mb-0 nutrientName">Calories</Card.Text>
                                <p className="m-0 small-date">{`Calories: ${food.calories} kCal`}</p>
                                <ProgressBar className="" variant="primary" now={100} label={`${food.calories} kCal`} />

                                <Card.Text className="mb-0 nutrientName">Water</Card.Text>
                                <p className="m-0 small-date">{`Water: ${food.water} g`}</p>
                                <ProgressBar className="" variant="primary" now={((food.water)/(food.portionSize))*100} label={`${(((food.water)/(food.portionSize))*100).toFixed(0)} %`} />

                                <Card.Text className="mb-0 nutrientName">Macronutrients</Card.Text>
                                <p className="m-0 small-date">{`Protein: ${food.protein} g`}</p>
                                <ProgressBar className="" variant="primary" now={((food.protein)/(food.portionSize))*100} label={`${(((food.protein)/(food.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Total Fat: ${food.totalFat} g`}</p>
                                <ProgressBar variant="primary" now={((food.totalFat)/(food.portionSize))*100} label={`${(((food.totalFat)/(food.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Carbohydrates: ${food.carbohydrates}g`}</p>
                                <ProgressBar variant="info" now={((food.carbohydrates)/(food.portionSize))*100} label={`${(((food.carbohydrates)/(food.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Fiber: ${food.dietaryFiber} g`}</p>
                                <ProgressBar variant="primary" now={((food.dietaryFiber)/(food.portionSize))*100} label={`${(((food.dietaryFiber)/(food.portionSize))*100).toFixed(1)} %`} />

                                <Card.Text className="mb-0 nutrientName">Minerals</Card.Text>
                                <p className="m-0 small-date">{`Calcium: ${food.calcium} mg`}</p>
                                <ProgressBar variant="danger" now={(((food.calcium)/(food.portionSize))*100)/1000} label={`${((((food.calcium)/(food.portionSize))*100)/1000).toFixed(1)} %`}/>
                                <p className="m-0 small-date">{`Iron: ${food.iron} mg`}</p>
                                <ProgressBar variant="warning" now={(((food.iron)/(food.portionSize))*100)/1000} label={`${((((food.iron)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Magnesium: ${food.magnesium} mg`}</p>
                                <ProgressBar variant="info" now={(((food.magnesium)/(food.portionSize))*100)/1000} label={`${((((food.magnesium)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Phosphorus ${food.phosphorus} mg`}</p>
                                <ProgressBar variant="primary" now={(((food.phosphorus)/(food.portionSize))*100)/1000} label={`${((((food.phosphorus)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Potassium: ${food.potassium} mg`}</p>
                                <ProgressBar variant="success" now={(((food.potassium)/(food.portionSize))*100)/1000} label={`${((((food.potassium)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Sodium ${food.sodium} mg`}</p>
                                <ProgressBar variant="danger" now={(((food.sodium)/(food.portionSize))*100)/1000} label={`${((((food.sodium)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Zinc: ${food.zinc} mg`}</p>
                                <ProgressBar variant="warning" now={(((food.zinc)/(food.portionSize))*100)/1000} label={`${((((food.zinc)/(food.portionSize))*100)/1000).toFixed(1)}  %`} />
                                <p className="m-0 small-date">{`Copper: ${food.copper} mg`}</p>
                                <ProgressBar variant="info" now={(((food.copper)/(food.portionSize))*100)/1000} label={`${((((food.copper)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Selenium: ${food.selenium} ug`}</p>
                                <ProgressBar variant="primary" now={(((food.selenium)/(food.portionSize))*100)/1000000} label={`${((((food.selenium)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />

                                <Card.Text className="mb-0 nutrientName">Vitamins</Card.Text>
                                <p className="m-0 small-date">{`Vitamin A: ${food.vitaminA} ug`}</p>
                                <ProgressBar variant="danger" now={((((food.vitaminA)/(food.portionSize))*100)/1000000)} label={`${((((food.vitaminA)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Vitamin E: ${food.vitaminE} mg`}</p>
                                <ProgressBar variant="warning" now={(((food.vitaminE)/(food.portionSize))*100)/1000} label={`${((((food.vitaminE)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin D: ${food.vitaminD} ug`}</p>
                                <ProgressBar variant="info" now={((((food.vitaminD)/(food.portionSize))*100)/1000000)} label={`${((((food.vitaminD)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Vitamin C: ${food.vitaminC} mg`}</p>
                                <ProgressBar variant="primary" now={((((food.vitaminC)/(food.portionSize))*100)/1000)} label={`${((((food.vitaminC)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Thiamin: ${food.thiamin} mg`}</p>
                                <ProgressBar variant="success" now={((((food.thiamin)/(food.portionSize))*100)/1000)} label={`${((((food.thiamin)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Riboflavin: ${food.riboflavin} mg`}</p>
                                <ProgressBar variant="danger" now={((((food.riboflavin)/(food.portionSize))*100)/1000)} label={`${((((food.riboflavin)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Niacin: ${food.niacin} mg`}</p>
                                <ProgressBar variant="warning" now={((((food.niacin)/(food.portionSize))*100)/1000)} label={`${((((food.niacin)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin B-6: ${food.vitaminB6} mg`}</p>
                                <ProgressBar variant="info" now={((((food.vitaminB6)/(food.portionSize))*100)/1000)} label={`${((((food.vitaminB6)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin B-12: ${food.vitaminB12} ug`}</p>
                                <ProgressBar variant="primary" now={(((food.vitaminB12)/(food.portionSize))*100)/1000000} label={`${((((food.vitaminB12)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Choline: ${food.choline} mg`}</p>
                                <ProgressBar variant="success" now={((((food.choline)/(food.portionSize))*100)/1000)} label={`${((((food.choline)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin K: ${food.vitaminK} ug`}</p>
                                <ProgressBar variant="danger" now={(((food.vitaminK)/(food.portionSize))*100)/1000000} label={`${((((food.vitaminK)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Folate ${food.folate} ug`}</p>
                                <ProgressBar variant="warning" now={(((food.folate)/(food.portionSize))*100)/1000000} label={`${((((food.folate)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />

                                
                                </div>
                                <Button variant="outline-primary"  size='sm' >Update Portion</Button>
                                <Button variant="outline-danger" className='ms-1' size='sm' onClick = {(e) => {deleteMovie(food._id)}}>Delete</Button>
                                <Button variant="outline-primary" size='sm' className='ms-1' onClick={() => navigate('/dashboard')} >Home</Button>
                        </Card.Body>
                </Card>
                    
                  
                    

                            
               
            
        </div>

    </Container>
    </motion.div>
  )
}

export default UpdatePortion