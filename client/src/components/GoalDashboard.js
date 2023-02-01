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
    const [dietaryFiber, setDietaryFiber] = useState(null);
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

    const [caloriesLimit, setCaloriesLimit] = useState(null);
    const [proteinLimit, setProteinLimit] = useState(null);
    const [totalFatLimit, setTotalFatLimit] = useState(null);
    const [carbohydratesLimit, setCarbohydratesLimit] = useState(null);
    const [dietaryFiberLimit, setDietaryFiberLimit] = useState(null);
    const [calciumLimit, setCalciumLimit] = useState(null);
    const [ironLimit, setIronLimit] = useState(null);
    const [magnesiumLimit, setMagnesiumLimit] = useState(null);
    const [phosphorusLimit, setPhosphorusLimit] = useState(null);
    const [potassiumLimit, setPotassiumLimit] = useState(null);
    const [sodiumLimit, setSodiumLimit] = useState(null);
    const [zincLimit, setZincLimit] = useState(null);
    const [copperLimit, setCopperLimit] = useState(null);
    const [seleniumLimit, setSeleniumLimit] = useState(null);
    const [vitaminALimit, setVitaminALimit] = useState(null);
    const [vitaminELimit, setVitaminELimit] = useState(null);
    const [vitaminDLimit, setVitaminDLimit] = useState(null);
    const [vitaminCLimit, setVitaminCLimit] = useState(null);
    const [thiaminLimit, setThiaminLimit] = useState(null);
    const [riboflavinLimit, setRiboflavinLimit] = useState(null);
    const [niacinLimit, setNiacinLimit] = useState(null);
    const [vitaminB6Limit, setVitaminB6Limit] = useState(null);
    const [vitaminB12Limit, setVitaminB12Limit] = useState(null);
    const [cholineLimit, setCholineLimit] = useState(null);
    const [vitaminKLimit, setVitaminKLimit] = useState(null);
    const [folateLimit, setFolateLimit] = useState(null);



    const [errors, setErrors] = useState({});
    const [user, setUser] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
  
    useEffect(() => {
      axios
        .get('http://localhost:8000/api/current-user', { withCredentials: true })
        .then((res) => {
          setAge(res.data.age)
          setGender(res.data.gender)
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
            setCalories(sumCalories.toFixed(2))}

            {let sumProtein = 0;
              nutrition.map((nutrients) => sumProtein += nutrients.protein);
            console.log(sumProtein)
            setProtein(sumProtein.toFixed(2))}
            
            {let sumTotalFat = 0;
              nutrition.map((nutrients) => sumTotalFat += nutrients.totalFat);
            console.log(sumTotalFat)
            setTotalFat(sumTotalFat.toFixed(2))}

            {let sumTotalCarbohydrates = 0;
              nutrition.map((nutrients) => sumTotalCarbohydrates += nutrients.carbohydrates);
            console.log(sumTotalCarbohydrates)
            setCarbohydrates(sumTotalCarbohydrates.toFixed(2))}

            {let sumFiber = 0;
              nutrition.map((nutrients) => sumFiber += nutrients.dietaryFiber);
            console.log(sumFiber)
            setDietaryFiber(sumFiber.toFixed(2))}

            {let sumCalcium = 0;
              nutrition.map((nutrients) => sumCalcium += nutrients.calcium);
            console.log(sumCalcium)
            setCalcium(sumCalcium.toFixed(2))}

            {let sumIron = 0;
              nutrition.map((nutrients) => sumIron += nutrients.iron);
            console.log(sumIron)
            setIron(sumIron.toFixed(2))}

            {let sumMagnesium = 0;
              nutrition.map((nutrients) => sumMagnesium += nutrients.magnesium);
            console.log(sumMagnesium)
            setMagnesium(sumMagnesium.toFixed(2))}

            {let sumPhosphorus = 0;
              nutrition.map((nutrients) => sumPhosphorus += nutrients.phosphorus);
            console.log(sumPhosphorus)
            setPhosphorus(sumPhosphorus.toFixed(2))}

            {let sumPotassium = 0;
              nutrition.map((nutrients) => sumPotassium += nutrients.potassium);
            console.log(sumPotassium)
            setPotassium(sumPotassium.toFixed(2))}

            {let sumSodium = 0;
              nutrition.map((nutrients) => sumSodium += nutrients.sodium);
            console.log(sumSodium)
            setSodium(sumSodium.toFixed(2))}

            {let sumZinc = 0;
              nutrition.map((nutrients) => sumZinc += nutrients.zinc);
            console.log(sumZinc.toFixed(2))
            setZinc(sumZinc.toFixed(2))}

            {let sumCopper = 0;
              nutrition.map((nutrients) => sumCopper += nutrients.copper);
            console.log(sumCopper.toFixed(2))
            setCopper(sumCopper.toFixed(2))}

            {let sumSelenium = 0;
              nutrition.map((nutrients) => sumSelenium += nutrients.selenium);
            console.log(sumSelenium.toFixed(2))
            setSelenium(sumSelenium.toFixed(2))}

            {let sumVitaminA = 0;
              nutrition.map((nutrients) => sumVitaminA += nutrients.vitaminA);
            console.log(sumVitaminA)
            setVitaminA(sumVitaminA.toFixed(2))}

            {let sumVitaminE = 0;
              nutrition.map((nutrients) => sumVitaminE += nutrients.vitaminE);
            console.log(sumVitaminE.toFixed(2))
            setVitaminE(sumVitaminE.toFixed(2))}

            {let sumVitaminD = 0;
              nutrition.map((nutrients) => sumVitaminD += nutrients.vitaminD);
            console.log(sumVitaminD)
            setVitaminD(sumVitaminD.toFixed(2))}

            {let sumVitaminC = 0;
              nutrition.map((nutrients) => sumVitaminC += nutrients.vitaminC);
            console.log(sumVitaminC)
            setVitaminC(sumVitaminC.toFixed(2))}

            {let sumThiamin = 0;
              nutrition.map((nutrients) => sumThiamin += nutrients.thiamin);
            console.log(sumThiamin)
            setThiamin(sumThiamin.toFixed(2))}

            {let sumRiboflavin = 0;
              nutrition.map((nutrients) => sumRiboflavin += nutrients.riboflavin);
            console.log(sumRiboflavin)
            setRiboflavin(sumRiboflavin.toFixed(2))}

            {let sumNiacin = 0;
              nutrition.map((nutrients) => sumNiacin += nutrients.niacin);
            console.log(sumNiacin)
            setNiacin(sumNiacin.toFixed(2))}

            {let sumVitaminB6 = 0;
              nutrition.map((nutrients) => sumVitaminB6 += nutrients.vitaminB6);
            console.log(sumVitaminB6)
            setVitaminB6(sumVitaminB6.toFixed(2))}

            {let sumVitaminB12 = 0;
              nutrition.map((nutrients) => sumVitaminB12 += nutrients.vitaminB12);
            console.log(sumVitaminB12)
            setVitaminB12(sumVitaminB12.toFixed(2))}

            {let sumCholine = 0;
              nutrition.map((nutrients) => sumCholine += nutrients.choline);
            console.log(sumCholine)
            setCholine(sumCholine.toFixed(2))}

            {let sumVitaminK = 0;
              nutrition.map((nutrients) => sumVitaminK += nutrients.vitaminK);
            console.log(sumVitaminK)
            setVitaminK(sumVitaminK.toFixed(2))}

            {let sumFolate = 0;
              nutrition.map((nutrients) => sumFolate += nutrients.folate);
            console.log(sumFolate)
            setFolate(sumFolate.toFixed(2))}
              
            if(age<= 50  && age >= 31 && gender === 'Male'){
              setCaloriesLimit(2200)
              setProteinLimit(56)
              setTotalFatLimit(49)
              setCarbohydratesLimit(130)
              setDietaryFiberLimit(30.8)
              setCalciumLimit(1000)
              setIronLimit(8)
              setMagnesiumLimit(420)
              setPhosphorusLimit(700)
              setPotassiumLimit(4700)
              setSodiumLimit(2300)
              setZincLimit(11)
              setCopperLimit(0.9)
              setSeleniumLimit(55)
              setVitaminALimit(900)
              setVitaminELimit(15)
              setVitaminDLimit(600)
              setVitaminCLimit(90)
              setThiaminLimit(1.2)
              setRiboflavinLimit(1.3)
              setNiacinLimit(16)
              setVitaminB6Limit(1.3)
              setVitaminB12Limit(2.4)
              setCholineLimit(550)
              setVitaminKLimit(120)
              setFolateLimit(400)
            }
         
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
              <Card.Header>Nutrition Summary</Card.Header>
                <Card.Body>
                  <ButtonGroup size="sm" className="mb-2">
                    <Button variant='outline-primary' active>Daily</Button>
                    <Button variant='outline-primary'>Weekly</Button>
                    <Button variant='outline-primary'>Monthly</Button>
                  </ButtonGroup>
                            
                  <div className="mb-1">
                  
                  
                    <Card.Text className="mb-0 nutrientName">Calories</Card.Text>
                    <p className="m-0 small-date">{`Calories: ${calories} kCal out of ${caloriesLimit} kCal`}</p>
                    <ProgressBar variant="primary" now={calories/caloriesLimit*100} label={`${(calories/caloriesLimit*100).toFixed(2)} %`} />
                   
                  
                  </div>
                  <div className="mb-1">
                   
                    
                    <Card.Text className="mb-0 nutrientName">Macronutrients</Card.Text>
                    <p className="m-0 small-date">{`Protein: ${protein} g out of ${proteinLimit} g`}</p>
                    <ProgressBar className="" variant="danger" now={protein/proteinLimit*100} label={`${(protein/proteinLimit *100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Total Fat: ${totalFat} g out of ${totalFatLimit} g`}</p>
                    <ProgressBar variant="warning" now={totalFat/totalFatLimit*100} label={`${(totalFat/totalFatLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Carbohydrates: ${carbohydrates} g out of ${carbohydratesLimit} g`}</p>
                    <ProgressBar variant="info" now={carbohydrates/carbohydratesLimit*100} label={`${(carbohydrates/carbohydratesLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Fiber: ${dietaryFiber} g out of ${dietaryFiberLimit} g`}</p>
                    <ProgressBar variant="primary" now={dietaryFiber/dietaryFiberLimit*100} label={`${(dietaryFiber/dietaryFiberLimit*100).toFixed(2)} %`} />
                

                    
                  
                  </div>
                  <div className="mb-1">
                  <Card.Text className="mb-0 nutrientName">Minerals</Card.Text>
                    <p className="m-0 small-date">{`Calcium: ${calcium} mg out of ${calciumLimit} mg`}</p>
                    <ProgressBar variant="danger" now={calcium/calciumLimit*100} label={`${(calcium/calciumLimit*100).toFixed(2)} %`}/>
                    <p className="m-0 small-date">Iron</p>
                    <ProgressBar variant="warning" now={iron} label={`${iron} %`} />
                    <p className="m-0 small-date">Magnesium</p>
                    <ProgressBar variant="info" now={magnesium} label={`${magnesium} %`} />
                    <p className="m-0 small-date">Phosphorus</p>
                    <ProgressBar variant="primary" now={phosphorus} label={`${phosphorus} %`} />
                    <p className="m-0 small-date">Potassium</p>
                    <ProgressBar variant="success" now={potassium} label={`${potassium} %`} />
                    <p className="m-0 small-date">Sodium</p>
                    <ProgressBar variant="danger" now={sodium} label={`${sodium} %`} />
                    <p className="m-0 small-date">Zinc</p>
                    <ProgressBar variant="warning" now={zinc} label={`${zinc} %`} />
                    <p className="m-0 small-date">Copper</p>
                    <ProgressBar variant="info" now={copper} label={`${copper} %`} />
                    <p className="m-0 small-date">Selenium</p>
                    <ProgressBar variant="primary" now={selenium} label={`${selenium} %`} />
                  </div>
                  <div className="mb-2">
                  <Card.Text className="mb-0 nutrientName">Vitamins</Card.Text>
                    <p className="m-0 small-date">Vitamin A</p>
                    <ProgressBar variant="danger" now={vitaminA} label={`Vitamin A ${vitaminA}g`} />
                    <p className="m-0 small-date">Vitamin E</p>
                    <ProgressBar variant="warning" now={vitaminE} label={`Vitamin E ${vitaminE}g`} />
                    <p className="m-0 small-date">Vitamin D</p>
                    <ProgressBar variant="info" now={vitaminD} label={`Vitamin D ${vitaminD}g`} />
                    <p className="m-0 small-date">Vitamin C</p>
                    <ProgressBar variant="primary" now={vitaminC} label={`Vitamin C ${vitaminC}g`} />
                    <p className="m-0 small-date">Thiamin</p>
                    <ProgressBar variant="success" now={thiamin} label={`Thiamin ${thiamin}g`} />
                    <p className="m-0 small-date">Riboflavin</p>
                    <ProgressBar variant="danger" now={riboflavin} label={`Riboflavin ${riboflavin}g`} />
                    <p className="m-0 small-date">Niacin</p>
                    <ProgressBar variant="warning" now={niacin} label={`Niacin ${niacin}g`} />
                    <p className="m-0 small-date">Vitamin B-6</p>
                    <ProgressBar variant="info" now={vitaminB6} label={`Vitamin B-6 ${vitaminB6}g`} />
                    <p className="m-0 small-date">Vitamin B-12</p>
                    <ProgressBar variant="primary" now={vitaminB12} label={`Vitamin B-12 ${vitaminB12}g`} />
                    <p className="m-0 small-date">Choline</p>
                    <ProgressBar variant="success" now={choline} label={`Choline ${choline}g`} />
                    <p className="m-0 small-date">Vitamin K</p>
                    <ProgressBar variant="danger" now={vitaminK} label={`Vitamin K ${vitaminK}g`} />
                    <p className="m-0 small-date">Folate</p>
                    <ProgressBar variant="warning" now={folate} label={`Folate ${folate}g`} />
                  </div>
                  <Button size="sm" variant="outline-primary" className="me-2">Update Nutrition</Button>
                  <Button size="sm" variant="outline-primary" className="me-2" onClick={() => navigate('/deleteFood')}>Delete Foods</Button>
                  
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

