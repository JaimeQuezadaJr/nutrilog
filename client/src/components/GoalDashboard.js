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
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState(null);
    const [protein, setProtein] = useState(null);
    const [totalFat, setTotalFat] = useState(null);
    const [carbohydrates, setCarbohydrates] = useState(null);
    const [fiber, setFiber] = useState(null);
    const [calcium, setCalcium] = useState(null);
    const [iron, setIron] = useState(null);
    const [magnesium, setMagnesium] = useState(null);
    const [phosphorus, setPhosphorus] = useState(null);
    const [potassium, setPotassium] = useState(null);
    const [sodium, setSodium] = useState(null);
    const [zinc, setZinc] = useState(null);
    const [copper, setCopper] = useState(null);
    const [selenium, setSelenium] = useState(null);
    const [vitaminA, setVitaminA] = useState(null);
    const [vitaminE, setVitaminE] = useState(null);
    const [vitaminD, setVitaminD] = useState(null);
    const [vitaminC, setVitaminC] = useState(null);
    const [thiamin, setThiamin] = useState(null);
    const [riboflavin, setRiboflavin] = useState(null);
    const [niacin, setNiacin] = useState(null);
    const [vitaminB6, setVitaminB6] = useState(null);
    const [vitaminB12, setVitaminB12] = useState(null);
    const [choline, setCholine] = useState(null);
    const [vitaminK, setVitaminK] = useState(null);
    const [folate, setFolate] = useState(null);
    
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
            
            {let sumTotalFat = 0;
              nutrition.map((nutrients) => sumTotalFat += nutrients.totalFat);
            console.log(sumTotalFat)
            setTotalFat(sumTotalFat)}

            {let sumTotalCarbohydrates = 0;
              nutrition.map((nutrients) => sumTotalCarbohydrates += nutrients.carbohydrates);
            console.log(sumTotalCarbohydrates)
            setCarbohydrates(sumTotalCarbohydrates)}

            {let sumFiber = 0;
              nutrition.map((nutrients) => sumFiber += nutrients.dietaryFiber);
            console.log(sumFiber)
            setFiber(sumFiber)}

            {let sumCalcium = 0;
              nutrition.map((nutrients) => sumCalcium += nutrients.calcium);
            console.log(sumCalcium)
            setCalcium(sumCalcium)}

            {let sumIron = 0;
              nutrition.map((nutrients) => sumIron += nutrients.iron);
            console.log(sumIron)
            setIron(sumIron)}

            {let sumMagnesium = 0;
              nutrition.map((nutrients) => sumMagnesium += nutrients.magnesium);
            console.log(sumMagnesium)
            setMagnesium(sumMagnesium)}

            {let sumPhosphorus = 0;
              nutrition.map((nutrients) => sumPhosphorus += nutrients.phosphorus);
            console.log(sumPhosphorus)
            setPhosphorus(sumPhosphorus)}

            {let sumPotassium = 0;
              nutrition.map((nutrients) => sumPotassium += nutrients.potassium);
            console.log(sumPotassium)
            setPotassium(sumPotassium)}

            {let sumSodium = 0;
              nutrition.map((nutrients) => sumSodium += nutrients.sodium);
            console.log(sumSodium)
            setSodium(sumSodium)}

            {let sumZinc = 0;
              nutrition.map((nutrients) => sumZinc += nutrients.zinc);
            console.log(sumZinc)
            setZinc(sumZinc)}

            {let sumCopper = 0;
              nutrition.map((nutrients) => sumCopper += nutrients.copper);
            console.log(sumCopper)
            setCopper(sumCopper)}

            {let sumSelenium = 0;
              nutrition.map((nutrients) => sumSelenium += nutrients.selenium);
            console.log(sumSelenium)
            setSelenium(sumSelenium)}

            {let sumVitaminA = 0;
              nutrition.map((nutrients) => sumVitaminA += nutrients.vitaminA);
            console.log(sumVitaminA)
            setVitaminA(sumVitaminA)}

            {let sumVitaminE = 0;
              nutrition.map((nutrients) => sumVitaminE += nutrients.vitaminE);
            console.log(sumVitaminE)
            setVitaminE(sumVitaminE)}

            {let sumVitaminD = 0;
              nutrition.map((nutrients) => sumVitaminD += nutrients.vitaminD);
            console.log(sumVitaminD)
            setVitaminD(sumVitaminD)}

            {let sumVitaminC = 0;
              nutrition.map((nutrients) => sumVitaminC += nutrients.vitaminC);
            console.log(sumVitaminC)
            setVitaminC(sumVitaminC)}

            {let sumThiamin = 0;
              nutrition.map((nutrients) => sumThiamin += nutrients.thiamin);
            console.log(sumThiamin)
            setThiamin(sumThiamin)}

            {let sumRiboflavin = 0;
              nutrition.map((nutrients) => sumRiboflavin += nutrients.riboflavin);
            console.log(sumRiboflavin)
            setRiboflavin(sumRiboflavin)}

            {let sumNiacin = 0;
              nutrition.map((nutrients) => sumNiacin += nutrients.niacin);
            console.log(sumNiacin)
            setNiacin(sumNiacin)}

            {let sumVitaminB6 = 0;
              nutrition.map((nutrients) => sumVitaminB6 += nutrients.vitaminB6);
            console.log(sumVitaminB6)
            setVitaminB6(sumVitaminB6)}

            {let sumVitaminB12 = 0;
              nutrition.map((nutrients) => sumVitaminB12 += nutrients.vitaminB12);
            console.log(sumVitaminB12)
            setVitaminB12(sumVitaminB12)}

            {let sumCholine = 0;
              nutrition.map((nutrients) => sumCholine += nutrients.choline);
            console.log(sumCholine)
            setCholine(sumCholine)}

            {let sumVitaminK = 0;
              nutrition.map((nutrients) => sumVitaminK += nutrients.vitaminK);
            console.log(sumVitaminK)
            setVitaminK(sumVitaminK)}

            {let sumFolate = 0;
              nutrition.map((nutrients) => sumFolate += nutrients.folate);
            console.log(sumFolate)
            setFolate(sumFolate)}
  
         
          })
          .catch(err => console.log(err));
          
        })
        .catch((err) => {
          console.log(err)
          navigate('/');
        }
        ); 
    }, [calories]);

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post('http://localhost:8000/api/nutrition', {
          foodName,
          calories,
          protein,
          totalFat,
          carbohydrates,
          dietaryFiber,
          calcium,
          iron,
          magnesium,
          phosphorus,
          potassium,
          sodium,
          zinc,
          copper,
          selenium,
          vitaminA,
          vitaminE,
          vitaminD,
          vitaminC,
          thiamin,
          riboflavin,
          niacin,
          vitaminB6,
          vitaminB12,
          choline,
          vitaminK,
          folate,
    })
        .then((res) => {
          console.log(res.data);
          navigate('/dashboard');
        })
        .catch((err) => setErrors(err.response.data.errors));
    };
    
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
                    <ProgressBar variant="warning" now={totalFat} label={`Total Fat ${totalFat}g`} />
                    <ProgressBar variant="info" now={carbohydrates} label={`Carbohydrates ${carbohydrates}g`} />
                    <ProgressBar variant="primary" now={fiber} label={`Fiber ${fiber}g`} />
                

                    
                  
                  </div>
                  <div className="mb-2">
                  <Card.Text className="mb-1 nutrientName">Minerals</Card.Text>
                    <ProgressBar variant="danger" now={calcium} label={`Calcium ${calcium}g`}/>
                    <ProgressBar variant="warning" now={iron} label={`Iron ${iron}g`} />
                    <ProgressBar variant="info" now={magnesium} label={`Magnesium ${magnesium}g`} />
                    <ProgressBar variant="primary" now={phosphorus} label={`Phosphorus ${phosphorus}g`} />
                    <ProgressBar variant="success" now={potassium} label={`Potassium ${potassium}g`} />
                    <ProgressBar variant="danger" now={sodium} label={`Sodium ${sodium}g`} />
                    <ProgressBar variant="warning" now={zinc} label={`Zinc${zinc}g`} />
                    <ProgressBar variant="info" now={copper} label={`Copper${copper}g`} />
                    <ProgressBar variant="primary" now={selenium} label={`Selenium ${selenium}g`} />
                  </div>
                  <div className="mb-3">
                  <Card.Text className="mb-1 nutrientName">Vitamins</Card.Text>
                    <ProgressBar variant="danger" now={vitaminA} label={`Vitamin A ${vitaminA}g`} />
                    <ProgressBar variant="warning" now={vitaminE} label={`Vitamin E ${vitaminE}g`} />
                    <ProgressBar variant="info" now={vitaminD} label={`Vitamin D ${vitaminD}g`} />
                    <ProgressBar variant="primary" now={vitaminC} label={`Vitamin C ${vitaminC}g`} />
                    <ProgressBar variant="success" now={thiamin} label={`Thiamin ${thiamin}g`} />
                    <ProgressBar variant="danger" now={riboflavin} label={`Riboflavin ${riboflavin}g`} />
                    <ProgressBar variant="warning" now={niacin} label={`Niacin ${niacin}g`} />
                    <ProgressBar variant="info" now={vitaminB6} label={`Vitamin B-6 ${vitaminB6}g`} />
                    <ProgressBar variant="primary" now={vitaminB12} label={`Vitamin B-12 ${vitaminB12}g`} />
                    <ProgressBar variant="success" now={choline} label={`Choline ${choline}g`} />
                    <ProgressBar variant="danger" now={vitaminK} label={`Vitamin K ${vitaminK}g`} />
                    <ProgressBar variant="warning" now={folate} label={`Folate ${folate}g`} />
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

