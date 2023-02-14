import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar';

import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion } from 'framer-motion';


const GoalDashboard = ({setLoggedIn}) => {

    const navigate = useNavigate();
    const [btnLink, setBtnLink] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const [foodName, setFoodName] = useState('');

    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [carbohydrates, setCarbohydrates] = useState(0);
    const [dietaryFiber, setDietaryFiber] = useState(0);
    const [calcium, setCalcium] = useState(0);
    const [iron, setIron] = useState(0);
    const [magnesium, setMagnesium] = useState(0);
    const [phosphorus, setPhosphorus] = useState(0);
    const [potassium, setPotassium] = useState(0);
    const [sodium, setSodium] = useState(0);
    const [zinc, setZinc] = useState(0);
    const [copper, setCopper] = useState(0);
    const [selenium, setSelenium] = useState(0);
    const [vitaminA, setVitaminA] = useState(0);
    const [vitaminE, setVitaminE] = useState(0);
    const [vitaminD, setVitaminD] = useState(0);
    const [vitaminC, setVitaminC] = useState(0);
    const [thiamin, setThiamin] = useState(0);
    const [riboflavin, setRiboflavin] = useState(0);
    const [niacin, setNiacin] = useState(0);
    const [vitaminB6, setVitaminB6] = useState(0);
    const [vitaminB12, setVitaminB12] = useState(0);
    const [choline, setCholine] = useState(0);
    const [vitaminK, setVitaminK] = useState(0);
    const [folate, setFolate] = useState(0);

    const [caloriesLimit, setCaloriesLimit] = useState(0);
    const [proteinLimit, setProteinLimit] = useState(0);
    const [totalFatLimit, setTotalFatLimit] = useState(0);
    const [carbohydratesLimit, setCarbohydratesLimit] = useState(0);
    const [dietaryFiberLimit, setDietaryFiberLimit] = useState(0);
    const [calciumLimit, setCalciumLimit] = useState(0);
    const [ironLimit, setIronLimit] = useState(0);
    const [magnesiumLimit, setMagnesiumLimit] = useState(0);
    const [phosphorusLimit, setPhosphorusLimit] = useState(0);
    const [potassiumLimit, setPotassiumLimit] = useState(0);
    const [sodiumLimit, setSodiumLimit] = useState(0);
    const [zincLimit, setZincLimit] = useState(0);
    const [copperLimit, setCopperLimit] = useState(0);
    const [seleniumLimit, setSeleniumLimit] = useState(0);
    const [vitaminALimit, setVitaminALimit] = useState(0);
    const [vitaminELimit, setVitaminELimit] = useState(0);
    const [vitaminDLimit, setVitaminDLimit] = useState(0);
    const [vitaminCLimit, setVitaminCLimit] = useState(0);
    const [thiaminLimit, setThiaminLimit] = useState(0);
    const [riboflavinLimit, setRiboflavinLimit] = useState(0);
    const [niacinLimit, setNiacinLimit] = useState(0);
    const [vitaminB6Limit, setVitaminB6Limit] = useState(0);
    const [vitaminB12Limit, setVitaminB12Limit] = useState(0);
    const [cholineLimit, setCholineLimit] = useState(0);
    const [vitaminKLimit, setVitaminKLimit] = useState(0);
    const [folateLimit, setFolateLimit] = useState(0);



    const [errors, setErrors] = useState({});
    const [user, setUser] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
  
    useEffect(() => {
      window.scrollTo(0,0)
      axios
        .get('http://localhost:8000/api/current-user', { withCredentials: true })
        .then((res) => {
          setAge(res.data.age)
          setGender(res.data.gender)
          setUser(res.data.firstName);
          setLoggedIn(true);

          if(age<= 8  && age >= 4 && gender === 'Female'){
            setCaloriesLimit(1200)
            setProteinLimit(19)
            setTotalFatLimit(33)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(16.8)
            setCalciumLimit(1000)
            setIronLimit(10)
            setMagnesiumLimit(130)
            setPhosphorusLimit(500)
            setPotassiumLimit(3800)
            setSodiumLimit(1900)
            setZincLimit(5)
            setCopperLimit(0.44)
            setSeleniumLimit(30)
            setVitaminALimit(400)
            setVitaminELimit(7)
            setVitaminDLimit(15)
            setVitaminCLimit(25)
            setThiaminLimit(0.6)
            setRiboflavinLimit(0.6)
            setNiacinLimit(8)
            setVitaminB6Limit(0.6)
            setVitaminB12Limit(1.2)
            setCholineLimit(250)
            setVitaminKLimit(55)
            setFolateLimit(200)
          }
          else if(age<= 8  && age >= 4 && gender === 'Male'){
            setCaloriesLimit(1400)
            setProteinLimit(19)
            setTotalFatLimit(39)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(19.6)
            setCalciumLimit(1000)
            setIronLimit(10)
            setMagnesiumLimit(130)
            setPhosphorusLimit(500)
            setPotassiumLimit(3800)
            setSodiumLimit(1900)
            setZincLimit(5)
            setCopperLimit(0.44)
            setSeleniumLimit(30)
            setVitaminALimit(400)
            setVitaminELimit(7)
            setVitaminDLimit(15)
            setVitaminCLimit(25)
            setThiaminLimit(0.6)
            setRiboflavinLimit(0.6)
            setNiacinLimit(8)
            setVitaminB6Limit(0.6)
            setVitaminB12Limit(1.2)
            setCholineLimit(250)
            setVitaminKLimit(55)
            setFolateLimit(200)
          }
          else if(age<= 13  && age >= 9 && gender === 'Female'){
            setCaloriesLimit(1600)
            setProteinLimit(34)
            setTotalFatLimit(44)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(22.4)
            setCalciumLimit(1300)
            setIronLimit(8)
            setMagnesiumLimit(240)
            setPhosphorusLimit(1250)
            setPotassiumLimit(4500)
            setSodiumLimit(2200)
            setZincLimit(8)
            setCopperLimit(0.7)
            setSeleniumLimit(40)
            setVitaminALimit(600)
            setVitaminELimit(11)
            setVitaminDLimit(15)
            setVitaminCLimit(45)
            setThiaminLimit(0.9)
            setRiboflavinLimit(0.9)
            setNiacinLimit(12)
            setVitaminB6Limit(1)
            setVitaminB12Limit(1.8)
            setCholineLimit(375)
            setVitaminKLimit(60)
            setFolateLimit(300)
          }
          else if(age<= 13  && age >= 9 && gender === 'Male'){
            setCaloriesLimit(1800)
            setProteinLimit(34)
            setTotalFatLimit(50)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(25.2)
            setCalciumLimit(1300)
            setIronLimit(8)
            setMagnesiumLimit(240)
            setPhosphorusLimit(1250)
            setPotassiumLimit(4500)
            setSodiumLimit(2200)
            setZincLimit(8)
            setCopperLimit(0.7)
            setSeleniumLimit(40)
            setVitaminALimit(600)
            setVitaminELimit(11)
            setVitaminDLimit(15)
            setVitaminCLimit(45)
            setThiaminLimit(0.9)
            setRiboflavinLimit(0.9)
            setNiacinLimit(12)
            setVitaminB6Limit(1)
            setVitaminB12Limit(1.8)
            setCholineLimit(375)
            setVitaminKLimit(60)
            setFolateLimit(300)
          }
          else if(age<= 18  && age >= 14 && gender === 'Female'){
            setCaloriesLimit(1800)
            setProteinLimit(46)
            setTotalFatLimit(50)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(25.2)
            setCalciumLimit(1300)
            setIronLimit(15)
            setMagnesiumLimit(360)
            setPhosphorusLimit(1250)
            setPotassiumLimit(4700)
            setSodiumLimit(2300)
            setZincLimit(9)
            setCopperLimit(0.89)
            setSeleniumLimit(55)
            setVitaminALimit(700)
            setVitaminELimit(15)
            setVitaminDLimit(15)
            setVitaminCLimit(65)
            setThiaminLimit(1)
            setRiboflavinLimit(1)
            setNiacinLimit(14)
            setVitaminB6Limit(1.2)
            setVitaminB12Limit(2.4)
            setCholineLimit(400)
            setVitaminKLimit(75)
            setFolateLimit(400)
          }
          else if(age<= 18  && age >= 14 && gender === 'Male'){
            setCaloriesLimit(2200)
            setProteinLimit(52)
            setTotalFatLimit(61)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(30.8)
            setCalciumLimit(1300)
            setIronLimit(11)
            setMagnesiumLimit(410)
            setPhosphorusLimit(1250)
            setPotassiumLimit(4700)
            setSodiumLimit(2300)
            setZincLimit(11)
            setCopperLimit(0.89)
            setSeleniumLimit(55)
            setVitaminALimit(900)
            setVitaminELimit(15)
            setVitaminDLimit(15)
            setVitaminCLimit(75)
            setThiaminLimit(1.2)
            setRiboflavinLimit(1.3)
            setNiacinLimit(16)
            setVitaminB6Limit(1.3)
            setVitaminB12Limit(2.4)
            setCholineLimit(550)
            setVitaminKLimit(75)
            setFolateLimit(400)
          }
          else if(age<= 30  && age >= 19 && gender === 'Female'){
            setCaloriesLimit(2000)
            setProteinLimit(46)
            setTotalFatLimit(44)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(28)
            setCalciumLimit(1000)
            setIronLimit(18)
            setMagnesiumLimit(310)
            setPhosphorusLimit(700)
            setPotassiumLimit(4700)
            setSodiumLimit(2300)
            setZincLimit(8)
            setCopperLimit(0.9)
            setSeleniumLimit(55)
            setVitaminALimit(700)
            setVitaminELimit(15)
            setVitaminDLimit(15)
            setVitaminCLimit(75)
            setThiaminLimit(1.1)
            setRiboflavinLimit(1.1)
            setNiacinLimit(14)
            setVitaminB6Limit(1.3)
            setVitaminB12Limit(2.4)
            setCholineLimit(425)
            setVitaminKLimit(90)
            setFolateLimit(400)
          }
          else if(age<= 30  && age >= 19 && gender === 'Male'){
            setCaloriesLimit(2400)
            setProteinLimit(56)
            setTotalFatLimit(53)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(33.6)
            setCalciumLimit(1000)
            setIronLimit(8)
            setMagnesiumLimit(400)
            setPhosphorusLimit(700)
            setPotassiumLimit(4700)
            setSodiumLimit(2300)
            setZincLimit(11)
            setCopperLimit(0.9)
            setSeleniumLimit(55)
            setVitaminALimit(900)
            setVitaminELimit(15)
            setVitaminDLimit(15)
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
          else if(age<= 50  && age >= 31 && gender === 'Female'){
            setCaloriesLimit(1800)
            setProteinLimit(46)
            setTotalFatLimit(40)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(25.2)
            setCalciumLimit(1000)
            setIronLimit(18)
            setMagnesiumLimit(320)
            setPhosphorusLimit(700)
            setPotassiumLimit(4700)
            setSodiumLimit(2300)
            setZincLimit(8)
            setCopperLimit(0.9)
            setSeleniumLimit(55)
            setVitaminALimit(700)
            setVitaminELimit(15)
            setVitaminDLimit(15)
            setVitaminCLimit(75)
            setThiaminLimit(1.1)
            setRiboflavinLimit(1.1)
            setNiacinLimit(14)
            setVitaminB6Limit(1.3)
            setVitaminB12Limit(2.4)
            setCholineLimit(425)
            setVitaminKLimit(90)
            setFolateLimit(400)
          }
          else if(age<= 50  && age >= 31 && gender === 'Male'){
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
            setVitaminDLimit(15)
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
          else if(age >= 51 && gender === 'Female'){
            setCaloriesLimit(1600)
            setProteinLimit(34)
            setTotalFatLimit(44)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(22.4)
            setCalciumLimit(1200)
            setIronLimit(8)
            setMagnesiumLimit(320)
            setPhosphorusLimit(700)
            setPotassiumLimit(4700)
            setSodiumLimit(2300)
            setZincLimit(8)
            setCopperLimit(0.9)
            setSeleniumLimit(55)
            setVitaminALimit(700)
            setVitaminELimit(15)
            setVitaminDLimit(15)
            setVitaminCLimit(75)
            setThiaminLimit(1.1)
            setRiboflavinLimit(1.1)
            setNiacinLimit(14)
            setVitaminB6Limit(1.5)
            setVitaminB12Limit(2.4)
            setCholineLimit(550)
            setVitaminKLimit(120)
            setFolateLimit(400)
          }
          else if(age >= 51 && gender === 'Male'){
            setCaloriesLimit(2000)
            setProteinLimit(56)
            setTotalFatLimit(44)
            setCarbohydratesLimit(130)
            setDietaryFiberLimit(28)
            setCalciumLimit(1200)
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
            setVitaminDLimit(15)
            setVitaminCLimit(90)
            setThiaminLimit(1.2)
            setRiboflavinLimit(1.3)
            setNiacinLimit(16)
            setVitaminB6Limit(1.7)
            setVitaminB12Limit(2.4)
            setCholineLimit(550)
            setVitaminKLimit(120)
            setFolateLimit(400)
          }
          
          axios.get(`http://localhost:8000/api/nutrition/user/${res.data._id}`, { withCredentials: true})
          .then(res => {
            setNutrition(res.data)



            {let sumCalories = 0;
              nutrition.map((nutrients) => sumCalories += nutrients.calories);
            
            setCalories(sumCalories.toFixed(2))}

            {let sumProtein = 0;
              nutrition.map((nutrients) => sumProtein += nutrients.protein);
           
            setProtein(sumProtein.toFixed(2))}
            
            {let sumTotalFat = 0;
              nutrition.map((nutrients) => sumTotalFat += nutrients.totalFat);
            
            setTotalFat(sumTotalFat.toFixed(2))}

            {let sumTotalCarbohydrates = 0;
              nutrition.map((nutrients) => sumTotalCarbohydrates += nutrients.carbohydrates);
            
            setCarbohydrates(sumTotalCarbohydrates.toFixed(2))}

            {let sumFiber = 0;
              nutrition.map((nutrients) => sumFiber += nutrients.dietaryFiber);
           
            setDietaryFiber(sumFiber.toFixed(2))}

            {let sumCalcium = 0;
              nutrition.map((nutrients) => sumCalcium += nutrients.calcium);
           
            setCalcium(sumCalcium.toFixed(2))}

            {let sumIron = 0;
              nutrition.map((nutrients) => sumIron += nutrients.iron);
           
            setIron(sumIron.toFixed(2))}

            {let sumMagnesium = 0;
              nutrition.map((nutrients) => sumMagnesium += nutrients.magnesium);
            
            setMagnesium(sumMagnesium.toFixed(2))}

            {let sumPhosphorus = 0;
              nutrition.map((nutrients) => sumPhosphorus += nutrients.phosphorus);
            
            setPhosphorus(sumPhosphorus.toFixed(2))}

            {let sumPotassium = 0;
              nutrition.map((nutrients) => sumPotassium += nutrients.potassium);
            
            setPotassium(sumPotassium.toFixed(2))}

            {let sumSodium = 0;
              nutrition.map((nutrients) => sumSodium += nutrients.sodium);
            
            setSodium(sumSodium.toFixed(2))}

            {let sumZinc = 0;
              nutrition.map((nutrients) => sumZinc += nutrients.zinc);
            
            setZinc(sumZinc.toFixed(2))}

            {let sumCopper = 0;
              nutrition.map((nutrients) => sumCopper += nutrients.copper);
            
            setCopper(sumCopper.toFixed(2))}

            {let sumSelenium = 0;
              nutrition.map((nutrients) => sumSelenium += nutrients.selenium);
           
            setSelenium(sumSelenium.toFixed(2))}

            {let sumVitaminA = 0;
              nutrition.map((nutrients) => sumVitaminA += nutrients.vitaminA);
           
            setVitaminA(sumVitaminA.toFixed(2))}

            {let sumVitaminE = 0;
              nutrition.map((nutrients) => sumVitaminE += nutrients.vitaminE);
           
            setVitaminE(sumVitaminE.toFixed(2))}

            {let sumVitaminD = 0;
              nutrition.map((nutrients) => sumVitaminD += nutrients.vitaminD);
            
            setVitaminD(sumVitaminD.toFixed(2))}

            {let sumVitaminC = 0;
              nutrition.map((nutrients) => sumVitaminC += nutrients.vitaminC);
           
            setVitaminC(sumVitaminC.toFixed(2))}

            {let sumThiamin = 0;
              nutrition.map((nutrients) => sumThiamin += nutrients.thiamin);
            
            setThiamin(sumThiamin.toFixed(2))}

            {let sumRiboflavin = 0;
              nutrition.map((nutrients) => sumRiboflavin += nutrients.riboflavin);
            
            setRiboflavin(sumRiboflavin.toFixed(2))}

            {let sumNiacin = 0;
              nutrition.map((nutrients) => sumNiacin += nutrients.niacin);
           
            setNiacin(sumNiacin.toFixed(2))}

            {let sumVitaminB6 = 0;
              nutrition.map((nutrients) => sumVitaminB6 += nutrients.vitaminB6);
            
            setVitaminB6(sumVitaminB6.toFixed(2))}

            {let sumVitaminB12 = 0;
              nutrition.map((nutrients) => sumVitaminB12 += nutrients.vitaminB12);
            
            setVitaminB12(sumVitaminB12.toFixed(2))}

            {let sumCholine = 0;
              nutrition.map((nutrients) => sumCholine += nutrients.choline);
            
            setCholine(sumCholine.toFixed(2))}

            {let sumVitaminK = 0;
              nutrition.map((nutrients) => sumVitaminK += nutrients.vitaminK);
            
            setVitaminK(sumVitaminK.toFixed(2))}

            {let sumFolate = 0;
              nutrition.map((nutrients) => sumFolate += nutrients.folate);
            
            setFolate(sumFolate.toFixed(2))}
              
              
         
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
      <div>
      <Container>
        <Row className="form">
          <Col className="page-bottom">
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
                    <p className="m-0 small-date">{`Iron: ${iron} mg out of ${ironLimit} mg`}</p>
                    <ProgressBar variant="warning" now={iron/ironLimit*100} label={`${(iron/ironLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Magnesium: ${magnesium} mg out of ${magnesiumLimit} mg`}</p>
                    <ProgressBar variant="info" now={magnesium/magnesiumLimit*100} label={`${(magnesium/magnesiumLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Phosphorus ${phosphorus} mg out of ${phosphorusLimit} mg`}</p>
                    <ProgressBar variant="primary" now={phosphorus/phosphorusLimit*100} label={`${(phosphorus/phosphorusLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Potassium: ${potassium} mg out of ${potassiumLimit} mg`}</p>
                    <ProgressBar variant="success" now={potassium/potassiumLimit*100} label={`${(potassium/potassiumLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Sodium ${sodium} mg out of ${sodiumLimit} mg`}</p>
                    <ProgressBar variant="danger" now={sodium/sodiumLimit*100} label={`${(sodium/sodiumLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Zinc: ${zinc} mg out of ${zincLimit} mg`}</p>
                    <ProgressBar variant="warning" now={zinc/zincLimit*100} label={`${(zinc/zincLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Copper: ${copper} mg out of ${copperLimit} mg`}</p>
                    <ProgressBar variant="info" now={copper/copperLimit*100} label={`${(copper/copperLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Selenium: ${selenium} ug out of ${seleniumLimit} ug`}</p>
                    <ProgressBar variant="primary" now={selenium/seleniumLimit*100} label={`${(selenium/seleniumLimit*100).toFixed(2)} %`} />
                  </div>
                  <div className="mb-2">
                  <Card.Text className="mb-0 nutrientName">Vitamins</Card.Text>
                    <p className="m-0 small-date">{`Vitamin A: ${vitaminA} ug out of ${vitaminALimit} ug`}</p>
                    <ProgressBar variant="danger" now={vitaminA/vitaminALimit*100} label={`${(vitaminA/vitaminALimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Vitamin E: ${vitaminE} mg out of ${vitaminELimit} mg`}</p>
                    <ProgressBar variant="warning" now={vitaminE/vitaminELimit*100} label={`${(vitaminE/vitaminELimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Vitamin D: ${vitaminD} ug out of ${vitaminDLimit} ug`}</p>
                    <ProgressBar variant="info" now={vitaminD/vitaminDLimit*100} label={`${(vitaminD/vitaminDLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Vitamin C: ${vitaminC} mg out of ${vitaminCLimit} mg`}</p>
                    <ProgressBar variant="primary" now={vitaminC/vitaminCLimit*100} label={`${(vitaminC/vitaminCLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Thiamin: ${thiamin} mg out of ${thiaminLimit} mg`}</p>
                    <ProgressBar variant="success" now={thiamin/thiaminLimit*100} label={`${(thiamin/thiaminLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Riboflavin: ${riboflavin} mg out of ${riboflavinLimit} mg`}</p>
                    <ProgressBar variant="danger" now={riboflavin/riboflavinLimit*100} label={`${(riboflavin/riboflavinLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Niacin: ${niacin} mg out of ${niacinLimit} mg`}</p>
                    <ProgressBar variant="warning" now={niacin/niacinLimit*100} label={`${(niacin/niacinLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Vitamin B-6: ${vitaminB6} mg out of ${vitaminB6Limit} mg`}</p>
                    <ProgressBar variant="info" now={vitaminB6/vitaminB6Limit*100} label={`${(vitaminB6/vitaminB6Limit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Vitamin B-12: ${vitaminB12} ug out of ${vitaminB12Limit} ug`}</p>
                    <ProgressBar variant="primary" now={vitaminB12/vitaminB12Limit*100} label={`${(vitaminB12/vitaminB12Limit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Choline: ${choline} mg out of ${cholineLimit} mg`}</p>
                    <ProgressBar variant="success" now={choline/cholineLimit*100} label={`${(choline/cholineLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Vitamin K: ${vitaminK} ug out of ${vitaminKLimit} ug`}</p>
                    <ProgressBar variant="danger" now={vitaminK/vitaminKLimit*100} label={`${(vitaminK/vitaminKLimit*100).toFixed(2)} %`} />
                    <p className="m-0 small-date">{`Folate ${folate} ug out of ${folateLimit} ug`}</p>
                    <ProgressBar variant="warning" now={folate/folateLimit*100} label={`${(folate/folateLimit*100).toFixed(2)} %`} />
                  </div>
                  <Button size="sm" variant="outline-primary" className="me-2">Update Goals</Button>
                  <Button size="sm" variant="outline-primary" className="me-2" onClick={() => navigate('/deleteFood')}>All Foods</Button>
                  <Button size="sm" variant="outline-primary" className="me-2" onClick={() => navigate('/nutrition')}>Add Foods</Button>
                </Card.Body>
            </Card>
          </Col>
          </Row>
      </Container>

      
      </div>
      </motion.div>
    )
  }
  export default GoalDashboard;

