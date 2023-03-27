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
    const [initialRender, setInitialRender] = useState(false);

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
              setPortion(res.data.portionSize)
              console.log(food)
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
        for(let i=0; i<29; i++) {
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
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Iron, Fe') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, iron: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Magnesium, Mg') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, magnesium: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Phosphorus, P') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, phosphorus: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Potassium, K') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, potassium: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Sodium, Na') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, sodium: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Zinc, Zn') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, zinc: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Copper, Cu') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, copper: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Selenium, Se') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, selenium: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Vitamin A, RAE') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminA: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Vitamin E (alpha-tocopherol)') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminE: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Vitamin D (D2 + D3)') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminD: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Vitamin C, total ascorbic acid') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminC: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Thiamin') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, thiamin: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Riboflavin') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, riboflavin: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Niacin') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, niacin: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Vitamin B-6') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminB6: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Vitamin B-12') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminB12: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Choline, total') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, choline: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Vitamin K (phylloquinone)') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, vitaminK: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'Folate, total') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, folate: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'foodName') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, foodTitle: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              } else if (e.target[i].name === 'portion') {
                setNutritionFacts(previousInputs => ({ ...previousInputs, portionSize: e.target[i].value }));
                console.log(e.target[i].name, e.target[i].value)
              }
          }
          setInitialRender(true)
          
    }
  
    useEffect(() => {
      if(initialRender === false) {
        console.log(initialRender);
      }
      else{
        axios
        .put(`http://localhost:8000/api/nutrition/${id}`, nutritionFacts, {withCredentials:true}) 
        .then((res) => {
          console.log(res.data);
          navigate('/dashboard');
        })
        .catch((err) => setErrors(err.response.data.error.errors))
      }
        
        
      
      },[nutritionFacts]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
    <Container>
        
        <div className='form flex'>
                     

                <Card className='page-bottom' border="light" style={{ width: '18rem' }}>
                <Form onSubmit={handleSubmit}>
                    <Card.Header className='nutrientName'>{food.foodTitle}</Card.Header>
                        <Card.Body>
                            
                            
                           
                            <Card.Text className='mb-0 nutrientName'>Portion: <span><input type='text' name='portion' value={portion} onChange = {(e) => (setPortion(e.target.value))}></input></span> g</Card.Text>
                            <Card.Text className="mb-2 small-date">* Nutrient percentages based on portion size.</Card.Text>
                            {errors.portionSize && <Form.Text className='text-danger'>{errors.portionSize.message}</Form.Text>}
                                <div className='foodScroll mb-3'>
                                <Card.Text className="mb-0 nutrientName">Calories</Card.Text>
                                <p className="m-0 small-date">{`Calories: ${((food.calories)*(portion/food.portionSize)).toFixed(2)} kCal`}</p>
                                <input hidden readOnly name='Energy' value={((food.calories)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar className="" variant="primary" now={100} label={`${((food.calories)*(portion/food.portionSize)).toFixed(2)} kCal`} />

                                <Card.Text className="mb-0 nutrientName">Water</Card.Text>
                                <p className="m-0 small-date">{`Water: ${((food.water)*(portion/food.portionSize)).toFixed(2)} g`}</p>
                                <input hidden readOnly name='Water' value={((food.water)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar className="" variant="primary" now={((food.water)/(food.portionSize))*100} label={`${(((food.water)/(food.portionSize))*100).toFixed(1)} %`} />

                                <Card.Text className="mb-0 nutrientName">Macronutrients</Card.Text>
                                <p className="m-0 small-date">{`Protein: ${((food.protein)*(portion/food.portionSize)).toFixed(2)} g`}</p>
                                <input hidden readOnly name='Protein' value={((food.protein)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar className="" variant="primary" now={((food.protein)/(food.portionSize))*100} label={`${(((food.protein)/(food.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Total Fat: ${((food.totalFat)*(portion/food.portionSize)).toFixed(2)} g`}</p>
                                <input hidden readOnly name='Total lipid (fat)' value={((food.totalFat)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="primary" now={((food.totalFat)/(food.portionSize))*100} label={`${(((food.totalFat)/(food.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Carbohydrates: ${((food.carbohydrates)*(portion/food.portionSize)).toFixed(2)}g`}</p>
                                <input hidden readOnly name='Carbohydrate, by difference' value={((food.carbohydrates)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="info" now={((food.carbohydrates)/(food.portionSize))*100} label={`${(((food.carbohydrates)/(food.portionSize))*100).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Fiber: ${((food.dietaryFiber)*(portion/food.portionSize)).toFixed(2)} g`}</p>
                                <input hidden readOnly name='Fiber, total dietary' value={((food.dietaryFiber)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="primary" now={((food.dietaryFiber)/(food.portionSize))*100} label={`${(((food.dietaryFiber)/(food.portionSize))*100).toFixed(1)} %`} />

                                <Card.Text className="mb-0 nutrientName">Minerals</Card.Text>
                                <p className="m-0 small-date">{`Calcium: ${((food.calcium)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Calcium, Ca' value={((food.calcium)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="danger" now={(((food.calcium)/(food.portionSize))*100)/1000} label={`${((((food.calcium)/(food.portionSize))*100)/1000).toFixed(1)} %`}/>
                                <p className="m-0 small-date">{`Iron: ${((food.iron)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Iron, Fe' value={((food.iron)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="warning" now={(((food.iron)/(food.portionSize))*100)/1000} label={`${((((food.iron)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Magnesium: ${((food.magnesium)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Magnesium, Mg' value={((food.magnesium)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="info" now={(((food.magnesium)/(food.portionSize))*100)/1000} label={`${((((food.magnesium)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Phosphorus ${((food.phosphorus)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Phosphorus, P' value={((food.phosphorus)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="primary" now={(((food.phosphorus)/(food.portionSize))*100)/1000} label={`${((((food.phosphorus)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Potassium: ${((food.potassium)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Potassium, K' value={((food.potassium)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="success" now={(((food.potassium)/(food.portionSize))*100)/1000} label={`${((((food.potassium)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Sodium ${((food.sodium)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Sodium, Na' value={((food.sodium)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="danger" now={(((food.sodium)/(food.portionSize))*100)/1000} label={`${((((food.sodium)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Zinc: ${((food.zinc)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Zinc, Zn' value={((food.zinc)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="warning" now={(((food.zinc)/(food.portionSize))*100)/1000} label={`${((((food.zinc)/(food.portionSize))*100)/1000).toFixed(1)}  %`} />
                                <p className="m-0 small-date">{`Copper: ${((food.copper)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Copper, Cu' value={((food.copper)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="info" now={(((food.copper)/(food.portionSize))*100)/1000} label={`${((((food.copper)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Selenium: ${((food.selenium)*(portion/food.portionSize)).toFixed(2)} ug`}</p>
                                <input hidden readOnly name='Selenium, Se' value={((food.selenium)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="primary" now={(((food.selenium)/(food.portionSize))*100)/1000000} label={`${((((food.selenium)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />

                                <Card.Text className="mb-0 nutrientName">Vitamins</Card.Text>
                                <p className="m-0 small-date">{`Vitamin A: ${((food.vitaminA)*(portion/food.portionSize)).toFixed(2)} ug`}</p>
                                <input hidden readOnly name='Vitamin A, RAE' value={((food.vitaminA)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="danger" now={((((food.vitaminA)/(food.portionSize))*100)/1000000)} label={`${((((food.vitaminA)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Vitamin E: ${((food.vitaminE)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Vitamin E (alpha-tocopherol)' value={((food.vitaminE)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="warning" now={(((food.vitaminE)/(food.portionSize))*100)/1000} label={`${((((food.vitaminE)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin D: ${((food.vitaminD)*(portion/food.portionSize)).toFixed(2)} ug`}</p>
                                <input hidden readOnly name='Vitamin D (D2 + D3)' value={((food.vitaminD)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="info" now={((((food.vitaminD)/(food.portionSize))*100)/1000000)} label={`${((((food.vitaminD)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Vitamin C: ${((food.vitaminC)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Vitamin C, total ascorbic acid' value={((food.vitaminC)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="primary" now={((((food.vitaminC)/(food.portionSize))*100)/1000)} label={`${((((food.vitaminC)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Thiamin: ${((food.thiamin)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Thiamin' value={((food.thiamin)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="success" now={((((food.thiamin)/(food.portionSize))*100)/1000)} label={`${((((food.thiamin)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Riboflavin: ${((food.riboflavin)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Riboflavin' value={((food.riboflavin)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="danger" now={((((food.riboflavin)/(food.portionSize))*100)/1000)} label={`${((((food.riboflavin)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Niacin: ${((food.niacin)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Niacin' value={((food.niacin)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="warning" now={((((food.niacin)/(food.portionSize))*100)/1000)} label={`${((((food.niacin)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin B-6: ${((food.vitaminB6)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Vitamin B-6' value={((food.vitaminB6)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="info" now={((((food.vitaminB6)/(food.portionSize))*100)/1000)} label={`${((((food.vitaminB6)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin B-12: ${((food.vitaminB12)*(portion/food.portionSize)).toFixed(2)} ug`}</p>
                                <input hidden readOnly name='Vitamin B-12' value={((food.vitaminB12)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="primary" now={(((food.vitaminB12)/(food.portionSize))*100)/1000000} label={`${((((food.vitaminB12)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Choline: ${((food.choline)*(portion/food.portionSize)).toFixed(2)} mg`}</p>
                                <input hidden readOnly name='Choline, total' value={((food.choline)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="success" now={((((food.choline)/(food.portionSize))*100)/1000)} label={`${((((food.choline)/(food.portionSize))*100)/1000).toFixed(1)} %`} />
                                <p className="m-0 small-date">{`Vitamin K: ${((food.vitaminK)*(portion/food.portionSize)).toFixed(2)} ug`}</p>
                                <input hidden readOnly name='Vitamin K (phylloquinone)' value={((food.vitaminK)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="danger" now={(((food.vitaminK)/(food.portionSize))*100)/1000000} label={`${((((food.vitaminK)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <p className="m-0 small-date">{`Folate ${((food.folate)*(portion/food.portionSize)).toFixed(2)} ug`}</p>
                                <input hidden readOnly name='Folate, total' value={((food.folate)*(portion/food.portionSize)).toFixed(2) || 0} style={{border:'none', backgroundColor: 'transparent', width:'45px', textAlign:'end'}}></input>
                                <ProgressBar variant="warning" now={(((food.folate)/(food.portionSize))*100)/1000000} label={`${((((food.folate)/(food.portionSize))*100)/1000000).toFixed(6)} %`} />
                                <Card.Text className="mb-0 mt-2 nutrientName">Added on: {dateParse(food.createdAt)}</Card.Text>
                                <input hidden readOnly name="foodName" value={food.foodTitle || ''}></input>
                                </div>
                                <Button variant="outline-primary"  size='sm' type='submit' >Update</Button>
                                <Button variant="outline-danger" className='ms-1' size='sm' onClick = {(e) => {deleteMovie(food._id)}}>Delete</Button>
                                <Button variant="outline-primary" size='sm' className='ms-1' onClick={() => navigate('/dashboard')} >Home</Button>
                        </Card.Body>
                        </Form>
                </Card>
                    
                  
                    

                            
               
            
        </div>

    </Container>
    </motion.div>
  )
}

export default UpdatePortion