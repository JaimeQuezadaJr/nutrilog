import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { motion } from 'framer-motion';
import Spinner from 'react-bootstrap/Spinner';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';


const NutritionSearch = ({loggedIn, setLoggedIn}) => {
    const navigate = useNavigate();
    const [initialRender, setInitialRender] = useState(false);
    const [loading, setLoading] = useState(false);
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
          setLoggedIn(true);
          setBtnLink(['handleSubmit', 'Add Nutrition']);
        })
        .catch((err) => {
          setLoggedIn(false);
          setBtnLink(['/register', 'Get Started']);
          console.log(err)
        });
    
      },[])

    const foodHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const params = {
            api_key: process.env.REACT_APP_FOOD_API_KEY,
            query: `${foodQuery}`,
            dataType: ['Survey (FNDDS)'],
            pagesize: 100,
        }
    
            axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`)
            .then(res => {
                setFood(res.data.foods)
                setFoodQuery("")
                setNutrients([])
                setFoodIndex(false)
                setLoading(false);
                setPortion(100)
            })
            .catch((err) => {
                console.log('Something went wrong', err)
            })
    }
    const nutrientHandler = (foodId) => {
        setFoodMeasure(food[foodId].foodMeasures)
        setFoodName(food[foodId].description)
        setNutrients(food[foodId].foodNutrients)
        setFoodIndex(true)
    }
    const portionHandler = (e) => {
        e.preventDefault();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        for(let i=0; i<67; i++) {
            if (e.target[i].name === 'Protein') {
                setNutritionFacts(previousInputs =>({ ...previousInputs, protein: e.target[i].value }));
              } else if (e.target[i].name === 'Total lipid (fat)') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, totalFat: e.target[i].value }));
              } else if (e.target[i].name === 'Carbohydrate, by difference') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, carbohydrates: e.target[i].value }));
              } else if (e.target[i].name === 'Energy') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, calories: e.target[i].value }));
              } else if (e.target[i].name === 'Water') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, water: e.target[i].value }));
              } else if (e.target[i].name === 'Fiber, total dietary') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, dietaryFiber: e.target[i].value }));
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
          setInitialRender(true);
    }
    
    useEffect(() => {
      if(initialRender === true) {
        axios
        .post('http://localhost:8000/api/nutrition', nutritionFacts, {withCredentials:true}) 
        .then((res) => {
          navigate('/dashboard');
        })
        
        .catch((err) => setErrors(err.response.data.errors))
      }

      
      },[nutritionFacts]);
        
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
    <div>
        <Container>
            <Row>
                <Col className='form'>
                </Col>
            </Row>
            <Row>
                <Col className='mb-3' >
                    <Card border="light" >
                        <Card.Header>Nutrition Base</Card.Header>
                        <Card.Body>
                            {loggedIn ?
                            <>
                        <Card.Title>Add Nutrition <img className='rounded' src='/Buffer-Progress-Bar.jpg' alt="blueCircle" width={30} height={30} /></Card.Title>
                        {/* <Card.Text>
                            Add nutrition facts to your nutrition base to better understand your diet.
                        </Card.Text> */}
                        </>
                        :
                        <>
                        <Card.Title>View Nutrition <img className='rounded' src='/Buffer-Progress-Bar.jpg' alt="blueCircle" width={30} height={30} /></Card.Title>
                        <Card.Text>
                            Access quick nutrition facts about your favorite foods to better understand your diet.
                        </Card.Text>
                        </>
                        }
                        <Card.Text className='small-date'>
                          * Data on 65 food components, including nutrients, and weights for foods and beverages reported in the What We Eat in America dietary survey component of the National Health and Nutrition Examination Survey. Visit <span><a href="https://www.ars.usda.gov/ARSUserFiles/80400530/pdf/fndds/2019_2020_FNDDS_Doc.pdf" target="_blank">here</a></span> for more information.
                        </Card.Text>
                        
                        <Form onSubmit = {foodHandler}>
                        <Form.Group className='mb-3 col-sm-2'>
                            
                            <Form.Control type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button size='sm' type="submit" variant='outline-primary' className='mb-3'>Search</Button>
                        </Form>
                        {loading ? <Spinner animation="border" variant='primary' /> : null}
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Results <span className='ms-3'><Badge bg='primary' pill>{food.length}</Badge></span> </Accordion.Header>
                            <Accordion.Body>
                            <div className='foodScroll'>
                              <ListGroup>
                              {food.map((foods, index)=>
                                                <ListGroup.Item action key={foods.fdcId} variant="outline-success" className='m-1' size='sm' onClick = {(e) => {nutrientHandler(index)}}>{foods.description}</ListGroup.Item>
                                            )}
                                            </ListGroup>
                                            </div>
                              
                                            
                            </Accordion.Body>
                          </Accordion.Item>
                          </Accordion>
                      </Card.Body>
                    </Card>
                </Col>
              </Row>
            <Row>
                <Col className='page-bottom' >
                    {foodIndex ===true ?
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
                    <Card border='light'>
                        <Card.Header className='nutrientName'>Nutrition Facts: {foodName}</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <Form onSubmit = {portionHandler}>
                                    <Form.Group>
                                        <Form.Label className='portion'>Portion Size (g)</Form.Label>
                                        <Form.Control type='text' value={portion} onChange = {(e) => (setPortion(e.target.value))} style={{width: '5rem'}} className='portion'></Form.Control>
                                    </Form.Group>
                                </Form>
                            </Card.Title>
                            <Card.Text className="mb-2 small-date">* Nutrient percentages based on portion size.</Card.Text>
                            <DropdownButton size='sm' variant='outline-primary' id="dropdown-basic-button" title="Portion Size">
                            {foodMeasure.map((foodMeasures, index) =>
                                <Dropdown.Item className='mb-0' key = {index} onClick ={() => {setPortion(foodMeasures.gramWeight)}}><span className='nutrientName'>{foodMeasures.disseminationText}</span>: {foodMeasures.gramWeight} g</Dropdown.Item>
                            )}
                            </DropdownButton>
                            {errors.portionSize && <Form.Text className='text-danger'>{errors.portionSize.message}</Form.Text>}
                    
                    <div className='scroll mt-3'>
                        <Form onSubmit={handleSubmit}>
                        {nutrients.map((foodNutrients, index) =>

                    <div key = {index}>
                        {foodNutrients.unitName === 'G'?
                        <>
                        <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>:<span><input readOnly name={foodNutrients.nutrientName} value={((portion/100)*foodNutrients.value).toFixed(2)} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>{(foodNutrients.unitName).toLowerCase()}</span></p>
                        {!portion?
                        <ProgressBar variant="primary" now={0}  label={`${0} %`}/>
                        :<ProgressBar variant="primary" now={(((portion/100)*foodNutrients.value)*(100/portion)).toFixed(2)}  label={`${(((portion/100)*foodNutrients.value)*(100/portion)).toFixed(2)} %`}/>
                        }
                        </>
                        :foodNutrients.unitName === 'MG'?
                        <>
                        <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>:<span><input readOnly name={foodNutrients.nutrientName} value={((portion/100)*foodNutrients.value).toFixed(2)} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>{(foodNutrients.unitName).toLowerCase()}</span></p>
                        {!portion?
                        <ProgressBar variant="primary" now={0}  label={`${0} %`}/>
                        :<ProgressBar variant="primary" now={(((portion/100)*foodNutrients.value)*(.1/portion)).toFixed(2)}  label={`${(((portion/100)*foodNutrients.value)*(.1/portion)).toFixed(2)} %`}/>
                        }
                        </>
                    :foodNutrients.unitName === 'UG'?
                      <>
                        <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>:<span><input readOnly name={foodNutrients.nutrientName} value={((portion/100)*foodNutrients.value).toFixed(2)} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>{(foodNutrients.unitName).toLowerCase()}</span></p>
                        {!portion?
                        <ProgressBar variant="primary" now={0}  label={`${0} %`}/>
                        :<ProgressBar variant="primary" now={(((portion/100)*foodNutrients.value)*(.0001/portion)).toFixed(2)}  label={`${(((portion/100)*foodNutrients.value)*(.0001/portion)).toFixed(2)} %`}/>
                        }
                        </>
                      :<>
                    <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>:<span><input readOnly name={foodNutrients.nutrientName} value={((portion/100)*foodNutrients.value).toFixed(2)} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>{(foodNutrients.unitName).toLowerCase()}</span></p>
                    <ProgressBar variant="primary" now={0}/>
                    </>
                    }
                    </div>
                  
                    
                    )}
                    <input hidden readOnly name="foodName" value={foodName}></input>
                    <input hidden readOnly name="portion" value={portion}></input>
                    {loggedIn ?
                    <Button size='sm' type="submit" variant='outline-primary' className='mt-2 mb-2' >{btnLink[1]}</Button>
                    :<Button size='sm' variant='outline-primary' className='mt-2 mb-2' onClick={() => navigate('/register')} >{btnLink[1]}</Button>}
                    </Form>
                    </div>
                </Card.Body>
            </Card>
            </motion.div>
            :null}
            
            </Col>
            </Row>

        </Container>
    </div>
    </motion.div>
  )
}

export default NutritionSearch;