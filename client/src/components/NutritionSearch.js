import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';
import InputGroup from 'react-bootstrap/InputGroup';


const NutritionSearch = ({setLoggedIn}) => {
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
            foodTitle:'',
            calories:0,
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
          setBtnLink(['/login', 'Get Started']);
          console.log(err)
        });
    
      },[])

    const foodHandler = (e) => {
        e.preventDefault();
        console.log(foodQuery)
        console.log(foodIndex)
        const params = {
            api_key: 'ma4EHu5hkEyGjQ5cwZeB9BjYd9iMg6XxzzmXqkMV',
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
                
                setPortion(100)
                console.log(res.data)
                console.log(res.data.foods)
                console.log(res.data.foods[0].foodNutrients)
            })
            .catch((err) => {
                console.log('Something went wrong', err)
            })
    }
    const nutrientHandler = (foodId) => {
        console.log(food.description)
        console.log(foodId)
        console.log([food])
        setFoodMeasure(food[foodId].foodMeasures)
        setFoodName(food[foodId].description)
        setNutrients(food[foodId].foodNutrients)
        setFoodIndex(true)
        console.log(food[foodId].foodNutrients)
    }
    const portionHandler = (e) => {
        e.preventDefault();
        console.log("hello")
        console.log(foodIndex)
        console.log(portion)
        console.log(nutrients[0].value)
        console.log([nutrients])
        
    }
    const handleChange = (e) => {
        if (e.target.name === 'Protein') {
            setNutritionFacts({ ...nutritionFacts, protein: e.target.value });
          } else if (e.target.name === 'Total lipid (fat)') {
            setNutritionFacts({ ...nutritionFacts, totalFat: e.target.value });
          } else if (e.target.name === 'Carbohydate, by difference') {
            setNutritionFacts({ ...nutritionFacts, carbohydrates: e.target.value });
          } else if (e.target.name === 'Energy') {
            setNutritionFacts({ ...nutritionFacts, calories: e.target.value });
          } else if (e.target.name === 'Fiber, total dietary') {
            setNutritionFacts({ ...nutritionFacts, dietaryFiber: e.target.value });
          } else if (e.target.name === 'Calcium, Ca') {
            setNutritionFacts({ ...nutritionFacts, calcium: e.target.value });
          } else if (e.target.name === 'Iron, Fe') {
            setNutritionFacts({ ...nutritionFacts, iron: e.target.value });
          } else if (e.target.name === 'Magnesium, Mg') {
            setNutritionFacts({ ...nutritionFacts, magnesium: e.target.value });
          } else if (e.target.name === 'Phosphorus, P') {
            setNutritionFacts({ ...nutritionFacts, phosphorus: e.target.value });
          } else if (e.target.name === 'Potassium, K') {
            setNutritionFacts({ ...nutritionFacts, potassium: e.target.value });
          } else if (e.target.name === 'Sodium, Na') {
            setNutritionFacts({ ...nutritionFacts, sodium: e.target.value });
          } else if (e.target.name === 'Zinc, Zn') {
            setNutritionFacts({ ...nutritionFacts, zinc: e.target.value });
          } else if (e.target.name === 'Copper, Cu') {
            setNutritionFacts({ ...nutritionFacts, copper: e.target.value });
          } else if (e.target.name === 'Selenium, Se') {
            setNutritionFacts({ ...nutritionFacts, selenium: e.target.value });
          } else if (e.target.name === 'Vitamin A, RAE') {
            setNutritionFacts({ ...nutritionFacts, vitaminA: e.target.value });
          } else if (e.target.name === 'Vitamin E (alpha-tocopherol)') {
            setNutritionFacts({ ...nutritionFacts, vitaminE: e.target.value });
          } else if (e.target.name === 'Vitamin D (D2 + D3)') {
            setNutritionFacts({ ...nutritionFacts, vitaminD: e.target.value });
          } else if (e.target.name === 'Vitamin C, total ascorbic acid') {
            setNutritionFacts({ ...nutritionFacts, vitaminC: e.target.value });
          } else if (e.target.name === 'Thiamin') {
            setNutritionFacts({ ...nutritionFacts, thiamin: e.target.value });
          } else if (e.target.name === 'Riboflavin') {
            setNutritionFacts({ ...nutritionFacts, riboflavin: e.target.value });
          } else if (e.target.name === 'Niacin') {
            setNutritionFacts({ ...nutritionFacts, niacin: e.target.value });
          } else if (e.target.name === 'Vitamin B-6') {
            setNutritionFacts({ ...nutritionFacts, vitaminB6: e.target.value });
          } else if (e.target.name === 'Vitamin B-12') {
            setNutritionFacts({ ...nutritionFacts, vitaminB12: e.target.value });
          } else if (e.target.name === 'Choline, total') {
            setNutritionFacts({ ...nutritionFacts, choline: e.target.value });
          } else if (e.target.name === 'Vitamin K (phylloquinone)') {
            setNutritionFacts({ ...nutritionFacts, vitaminK: e.target.value });
          } else if (e.target.name === 'Folate, total') {
            setNutritionFacts({ ...nutritionFacts, folate: e.target.value });
          } else if (e.target.name === 'foodName') {
            setNutritionFacts({ ...nutritionFacts, foodTitle: e.target.value });
          }
         
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post('http://localhost:8000/api/nutrition', nutritionFacts, {withCredentials:true}) 
          .then((res) => {
            console.log(res.data);
            navigate('/dashboard');
          })
          .catch((err) => console.log(err));
      };

    
  return (
    <div>
        <Container>
            <Row>
                <Col className='form'>
                </Col>
            </Row>
            <Row className=''>
                <Col className='mb-3' >
                    <Card border="light" >
                        <Card.Header>Nutrition Base</Card.Header>
                        <Card.Body>
                        <Card.Title>View Nutrition <img className='rounded' src='/Buffer-Progress-Bar.jpg' alt="blueCircle" width={30} height={30} /></Card.Title>
                        <Card.Text>
                            Access quick nutrition facts about your favorite foods to better understand your diet.
                        </Card.Text>
                        
                        <Form onSubmit = {foodHandler}>
                        <Form.Group className='mb-3 col-sm-2'>
                            
                            <Form.Control type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button size='sm' type="submit" variant='outline-primary' className='mb-3'>Search</Button>
                    </Form>
                    <div className='foodScroll'>
                    {food.map((foods, index)=>
                            
                                <Button key={foods.fdcId} variant="outline-success" className='m-1' size='sm' onClick = {(e) => {nutrientHandler(index)}}>{foods.description}</Button>
                            
                    )}
                    </div>
                        
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <Row>
                <Col className='page-bottom' >
            {foodIndex ===true ?
            <Card
            border='light'
            
            className="">
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
                    <DropdownButton size='sm' variant='outline-primary' id="dropdown-basic-button" title="Portion Size">
                    {foodMeasure.map((foodMeasures, index) =>
                        <Dropdown.Item className='mb-0' key = {index} onClick ={() => {setPortion(foodMeasures.gramWeight)}}><span className='nutrientName'>{foodMeasures.disseminationText}</span>: {foodMeasures.gramWeight} g</Dropdown.Item>
                    )}
                    </DropdownButton>
                    
                    <div className='scroll mt-3'>
                    <Form onSubmit={handleSubmit}>
                    <Button size='sm' type="submit" variant='outline-primary' className='mb-2' onClick={(btnLink[0])}>{btnLink[1]}</Button>
                    {nutrients.map((foodNutrients, index) =>
               
                    <div key = {index}>
                       
                       {foodNutrients.unitName === 'G'?
                       <>
                        <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>:<span><input readOnly name={foodNutrients.nutrientName} value={((portion/100)*foodNutrients.value).toFixed(2)} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}} onChange={handleChange}></input>{(foodNutrients.unitName).toLowerCase()}</span></p>
                        <ProgressBar variant="primary" now={(((portion/100)*foodNutrients.value)*(100/portion)).toFixed(2)}  label={`${(((portion/100)*foodNutrients.value)*(100/portion)).toFixed(2)} %`}/>
                        </>
                        :foodNutrients.unitName === 'MG'?
                        <>
                        <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>:<span><input readOnly name={foodNutrients.nutrientName} value={((portion/100)*foodNutrients.value).toFixed(2)} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}} onChange={handleChange}></input>{(foodNutrients.unitName).toLowerCase()}</span></p>
                        <ProgressBar variant="primary" now={(((portion/100)*foodNutrients.value)*(.1/portion)).toFixed(2)}  label={`${(((portion/100)*foodNutrients.value)*(.1/portion)).toFixed(2)} %`}/>
                        </>
                    :foodNutrients.unitName === 'UG'?
                    <>
                        <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>:<span><input readOnly name={foodNutrients.nutrientName} value={((portion/100)*foodNutrients.value).toFixed(2)} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}} onChange={handleChange}></input>{(foodNutrients.unitName).toLowerCase()}</span></p>
                        <ProgressBar variant="primary" now={(((portion/100)*foodNutrients.value)*(.0001/portion)).toFixed(2)}  label={`${(((portion/100)*foodNutrients.value)*(.0001/portion)).toFixed(2)} %`}/>
                        </>
                    :<>
                    <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>:<span><input readOnly name={foodNutrients.nutrientName} value={((portion/100)*foodNutrients.value).toFixed(2)} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}} onChange={handleChange}></input>{(foodNutrients.unitName).toLowerCase()}</span></p>
                    <ProgressBar variant="primary" now={0}/>
                    </>
                    }
                        
                        </div>
                  
                    
                    )}
                    <input hidden readOnly name='foodName' value={foodName} onChange={handleChange}></input>
                    </Form>
                    </div>
                </Card.Body>
            </Card>
            :null}
            </Col>
            </Row>

        </Container>
    </div>
  )
}


{/* <div className='main'>
                        <Card.Header><span className='nutrientName'>Try it out!</span></Card.Header>
                        <Card.Body>
                        <Card.Text className='submain'>Search the nutrition facts for some of your favorite foods!</Card.Text>
                        <Card.Text>
                        <Form onSubmit = {foodHandler}>
                        <Form.Group className='mb-3 col-sm-8'>
                            <Form.Label>Food Search</Form.Label>
                            <Form.Control type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button size='sm' type="submit" variant='outline-primary' className='mb-3'>Search</Button>
                    </Form>
                    <div className='foodScroll'>
                    {food.map((foods, index)=>
                            <div key={foods.fdcId} >
                                <Button variant="outline-success" className='mb-2' size='sm' onClick = {(e) => {nutrientHandler(index)}}>{foods.description}</Button>
                            </div>
                    )}
                    </div>
                        </Card.Text>
                        </Card.Body>
                        </div> 


                        <div key = {index}>
                        {foodNutrients.unitName === 'MG' ?
                        <>
                        <p className='mb-0'> <span className='nutrientName'>{foodNutrients.nutrientName}</span>: {((portion/100)*foodNutrients.value).toFixed(2)} {(foodNutrients.unitName).toLowerCase()}</p>
                        <ProgressBar variant="primary" now={(((portion/100)*foodNutrients.value)*(.1/portion)).toFixed(2)}  label={foodNutrients.nutrientName} />
                        
                        </>
                        :null}
                        </div>
                        
                        
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">{foodNutrients.nutrientName}</InputGroup.Text>
                            <Form.Control
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            type='number' value={((portion/100)*foodNutrients.value).toFixed(2)}
                            />
                        </InputGroup>*/
                    }
export default NutritionSearch;