import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';

const GoalDashboard = ({setLoggedIn}) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [dailyValue, setDailyValue] = useState(false);
  const [weeklyValue, setWeeklyValue] = useState(false);
  const [monthlyValue, setMonthlyValue] = useState(false);
  const [checkValue, setCheckValue] = useState(0);
  const [weeklyView, setWeeklyView] = useState(2);
  const [monthlyView, setMonthlyView] = useState(3);

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

    const current = new Date();


    const dateParse = (date) => {
      let dateObj = new Date(date);
      let day = `0${dateObj.getDate()}`.slice(-2);
      let month = `0${dateObj.getMonth() + 1}`.slice(-2);
      return `${month}/${day}/${dateObj.getFullYear()}`;
    }

  
    useEffect(() => {
      window.scrollTo(0,0)
      axios
        .get('http://localhost:8000/api/current-user', { withCredentials: true })
        .then((res) => {
          setAge(res.data.age)
          setGender(res.data.gender)
          setUser(res.data.firstName);
          setLoggedIn(true);
          setDailyValue(true);
          setCheckValue(1);

          axios.get(`http://localhost:8000/api/nutrition/user/${res.data._id}`, { withCredentials: true})
          .then(res => {
            setNutrition(res.data)
            console.log(nutrition)

          })
          .catch(err => console.log(err));
        })
        .catch((err) => {
          console.log(err)
          navigate('/');
        }); 
    }, []);

    useEffect(() => {

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
          
              
 
    }, [age]);

    useEffect(() => {
                let sumCalories = 0;
                let sumProtein = 0;
                let sumTotalFat = 0;
                let sumTotalCarbohydrates = 0;
                let sumFiber = 0;
                let sumCalcium = 0;
                let sumIron = 0;
                let sumMagnesium = 0;
                let sumPhosphorus = 0;
                let sumPotassium = 0;
                let sumSodium = 0;
                let sumZinc = 0;
                let sumCopper = 0;
                let sumSelenium = 0;
                let sumVitaminA = 0;
                let sumVitaminE = 0;
                let sumVitaminD = 0;
                let sumVitaminC = 0;
                let sumThiamin = 0;
                let sumRiboflavin = 0;
                let sumNiacin = 0;
                let sumVitaminB6 = 0;
                let sumVitaminB12 = 0;
                let sumCholine = 0;
                let sumVitaminK = 0;
                let sumFolate = 0;
                nutrition.map((nutrients) => {
                  if (dateParse(nutrients.createdAt) === dateParse(new Date())){
                    
                    sumCalories += nutrients.calories
                    setCalories(sumCalories.toFixed(2))

                    sumProtein += nutrients.protein
                    setProtein(sumProtein.toFixed(2))

                    sumTotalFat += nutrients.totalFat
                    setTotalFat(sumTotalFat.toFixed(2))

                    sumTotalCarbohydrates += nutrients.carbohydrates
                    setCarbohydrates(sumTotalCarbohydrates.toFixed(2))

                    sumFiber += nutrients.dietaryFiber
                    setDietaryFiber(sumFiber.toFixed(2))

                    sumCalcium += nutrients.calcium
                    setCalcium(sumCalcium.toFixed(2))

                    sumIron += nutrients.iron
                    setIron(sumIron.toFixed(2))

                    sumMagnesium += nutrients.magnesium
                    setMagnesium(sumMagnesium.toFixed(2))

                    sumPhosphorus += nutrients.phosphorus
                    setPhosphorus(sumPhosphorus.toFixed(2))

                    sumPotassium += nutrients.potassium
                    setPotassium(sumPotassium.toFixed(2))

                    sumSodium += nutrients.sodium
                    setSodium(sumSodium.toFixed(2))

                    sumZinc += nutrients.zinc
                    setZinc(sumZinc.toFixed(2))

                    sumCopper += nutrients.copper
                    setCopper(sumCopper.toFixed(2))

                    sumSelenium += nutrients.selenium
                    setSelenium(sumSelenium.toFixed(2))

                    sumVitaminA += nutrients.vitaminA
                    setVitaminA(sumVitaminA.toFixed(2))
                    
                    sumVitaminE += nutrients.vitaminE
                    setVitaminE(sumVitaminE.toFixed(2))

                    sumVitaminD += nutrients.vitaminD
                    setVitaminD(sumVitaminD.toFixed(2))

                    sumVitaminC += nutrients.vitaminC
                    setVitaminC(sumVitaminC.toFixed(2))

                    sumThiamin += nutrients.thiamin
                    setThiamin(sumThiamin.toFixed(2))

                    sumRiboflavin += nutrients.riboflavin
                    setRiboflavin(sumRiboflavin.toFixed(2))

                    sumNiacin += nutrients.niacin
                    setNiacin(sumNiacin.toFixed(2))

                    sumVitaminB6 += nutrients.vitaminB6
                    setVitaminB6(sumVitaminB6.toFixed(2))

                    sumVitaminB12 += nutrients.vitaminB12
                    setVitaminB12(sumVitaminB12.toFixed(2))

                    sumCholine += nutrients.choline
                    setCholine(sumCholine.toFixed(2))

                    sumVitaminK += nutrients.vitaminK
                    setVitaminK(sumVitaminK.toFixed(2))

                    sumFolate += nutrients.folate
                    setFolate(sumFolate.toFixed(2))
                  
                  }


                })
  
  }, [nutrition]);


    const dailyChange = () => {
      setDailyValue(true);
      setWeeklyValue(false);
      setMonthlyValue(false);

      if (dailyValue === false && weeklyValue === true && checkValue === 1) {
        setCaloriesLimit(caloriesLimit/7)
        setProteinLimit(proteinLimit / 7)
        setTotalFatLimit(totalFatLimit / 7)
        setCarbohydratesLimit(carbohydratesLimit / 7)
        setDietaryFiberLimit(dietaryFiberLimit / 7)
        setCalciumLimit(calciumLimit / 7)
        setIronLimit(ironLimit / 7)
        setMagnesiumLimit(magnesiumLimit / 7)
        setPhosphorusLimit(phosphorusLimit / 7)
        setPotassiumLimit(potassiumLimit / 7)
        setSodiumLimit(sodiumLimit / 7)
        setZincLimit(zincLimit / 7)
        setCopperLimit(copperLimit / 7)
        setSeleniumLimit(seleniumLimit / 7)
        setVitaminALimit(vitaminALimit / 7)
        setVitaminELimit(vitaminELimit / 7)
        setVitaminDLimit(vitaminDLimit / 7)
        setVitaminCLimit(vitaminCLimit / 7)
        setThiaminLimit(thiaminLimit / 7)
        setRiboflavinLimit(riboflavinLimit / 7)
        setNiacinLimit(niacinLimit / 7)
        setVitaminB6Limit(vitaminB6Limit / 7)
        setVitaminB12Limit(vitaminB12Limit / 7)
        setCholineLimit(cholineLimit / 7)
        setVitaminKLimit(vitaminKLimit / 7)
        setFolateLimit(folateLimit / 7)
      }

      else if (monthlyValue === true) {
        setCaloriesLimit(caloriesLimit / 30)
        setProteinLimit(proteinLimit / 30)
        setTotalFatLimit(totalFatLimit / 30)
        setCarbohydratesLimit(carbohydratesLimit / 30)
        setDietaryFiberLimit(dietaryFiberLimit / 30)
        setCalciumLimit(calciumLimit / 30)
        setIronLimit(ironLimit / 30)
        setMagnesiumLimit(magnesiumLimit / 30)
        setPhosphorusLimit(phosphorusLimit / 30)
        setPotassiumLimit(potassiumLimit / 30)
        setSodiumLimit(sodiumLimit / 30)
        setZincLimit(zincLimit / 30)
        setCopperLimit(copperLimit / 30)
        setSeleniumLimit(seleniumLimit / 30)
        setVitaminALimit(vitaminALimit / 30)
        setVitaminELimit(vitaminELimit / 30)
        setVitaminDLimit(vitaminDLimit / 30)
        setVitaminCLimit(vitaminCLimit / 30)
        setThiaminLimit(thiaminLimit / 30)
        setRiboflavinLimit(riboflavinLimit / 30)
        setNiacinLimit(niacinLimit / 30)
        setVitaminB6Limit(vitaminB6Limit / 30)
        setVitaminB12Limit(vitaminB12Limit / 30)
        setCholineLimit(cholineLimit / 30)
        setVitaminKLimit(vitaminKLimit / 30)
        setFolateLimit(folateLimit / 30)
      }

      else if (weeklyValue === true) {
        setCaloriesLimit(caloriesLimit / 7)
        setProteinLimit(proteinLimit / 7)
        setTotalFatLimit(totalFatLimit / 7)
        setCarbohydratesLimit(carbohydratesLimit / 7)
        setDietaryFiberLimit(dietaryFiberLimit / 7)
        setCalciumLimit(calciumLimit / 7)
        setIronLimit(ironLimit / 7)
        setMagnesiumLimit(magnesiumLimit / 7)
        setPhosphorusLimit(phosphorusLimit / 7)
        setPotassiumLimit(potassiumLimit / 7)
        setSodiumLimit(sodiumLimit / 7)
        setZincLimit(zincLimit / 7)
        setCopperLimit(copperLimit / 7)
        setSeleniumLimit(seleniumLimit / 7)
        setVitaminALimit(vitaminALimit / 7)
        setVitaminELimit(vitaminELimit / 7)
        setVitaminDLimit(vitaminDLimit / 7)
        setVitaminCLimit(vitaminCLimit / 7)
        setThiaminLimit(thiaminLimit / 7)
        setRiboflavinLimit(riboflavinLimit / 7)
        setNiacinLimit(niacinLimit / 7)
        setVitaminB6Limit(vitaminB6Limit / 7)
        setVitaminB12Limit(vitaminB12Limit / 7)
        setCholineLimit(cholineLimit / 7)
        setVitaminKLimit(vitaminKLimit / 7)
        setFolateLimit(folateLimit / 7)
      }

      let sumCalories = 0;
      let sumProtein = 0;
      let sumTotalFat = 0;
      let sumTotalCarbohydrates = 0;
      let sumFiber = 0;
      let sumCalcium = 0;
      let sumIron = 0;
      let sumMagnesium = 0;
      let sumPhosphorus = 0;
      let sumPotassium = 0;
      let sumSodium = 0;
      let sumZinc = 0;
      let sumCopper = 0;
      let sumSelenium = 0;
      let sumVitaminA = 0;
      let sumVitaminE = 0;
      let sumVitaminD = 0;
      let sumVitaminC = 0;
      let sumThiamin = 0;
      let sumRiboflavin = 0;
      let sumNiacin = 0;
      let sumVitaminB6 = 0;
      let sumVitaminB12 = 0;
      let sumCholine = 0;
      let sumVitaminK = 0;
      let sumFolate = 0;
      nutrition.map((nutrients) => {
        if (dateParse(nutrients.createdAt) === dateParse(new Date())){
          
          sumCalories += nutrients.calories
          setCalories(sumCalories.toFixed(2))

          sumProtein += nutrients.protein
          setProtein(sumProtein.toFixed(2))

          sumTotalFat += nutrients.totalFat
          setTotalFat(sumTotalFat.toFixed(2))

          sumTotalCarbohydrates += nutrients.carbohydrates
          setCarbohydrates(sumTotalCarbohydrates.toFixed(2))

          sumFiber += nutrients.dietaryFiber
          setDietaryFiber(sumFiber.toFixed(2))

          sumCalcium += nutrients.calcium
          setCalcium(sumCalcium.toFixed(2))

          sumIron += nutrients.iron
          setIron(sumIron.toFixed(2))

          sumMagnesium += nutrients.magnesium
          setMagnesium(sumMagnesium.toFixed(2))

          sumPhosphorus += nutrients.phosphorus
          setPhosphorus(sumPhosphorus.toFixed(2))

          sumPotassium += nutrients.potassium
          setPotassium(sumPotassium.toFixed(2))

          sumSodium += nutrients.sodium
          setSodium(sumSodium.toFixed(2))

          sumZinc += nutrients.zinc
          setZinc(sumZinc.toFixed(2))

          sumCopper += nutrients.copper
          setCopper(sumCopper.toFixed(2))

          sumSelenium += nutrients.selenium
          setSelenium(sumSelenium.toFixed(2))

          sumVitaminA += nutrients.vitaminA
          setVitaminA(sumVitaminA.toFixed(2))
          
          sumVitaminE += nutrients.vitaminE
          setVitaminE(sumVitaminE.toFixed(2))

          sumVitaminD += nutrients.vitaminD
          setVitaminD(sumVitaminD.toFixed(2))

          sumVitaminC += nutrients.vitaminC
          setVitaminC(sumVitaminC.toFixed(2))

          sumThiamin += nutrients.thiamin
          setThiamin(sumThiamin.toFixed(2))

          sumRiboflavin += nutrients.riboflavin
          setRiboflavin(sumRiboflavin.toFixed(2))

          sumNiacin += nutrients.niacin
          setNiacin(sumNiacin.toFixed(2))

          sumVitaminB6 += nutrients.vitaminB6
          setVitaminB6(sumVitaminB6.toFixed(2))

          sumVitaminB12 += nutrients.vitaminB12
          setVitaminB12(sumVitaminB12.toFixed(2))

          sumCholine += nutrients.choline
          setCholine(sumCholine.toFixed(2))

          sumVitaminK += nutrients.vitaminK
          setVitaminK(sumVitaminK.toFixed(2))

          sumFolate += nutrients.folate
          setFolate(sumFolate.toFixed(2))
        
        }
        else {
          setCalories(0);
          setProtein(0);
          setTotalFat(0);
          setCarbohydrates(0);
          setDietaryFiber(0);
          setCalcium(0);
          setIron(0);
          setMagnesium(0);
          setPhosphorus(0);
          setPotassium(0);
          setSodium(0);
          setZinc(0);
          setCopper(0);
          setSelenium(0);
          setVitaminA(0);
          setVitaminE(0);
          setVitaminD(0);
          setVitaminC(0);
          setThiamin(0);
          setRiboflavin(0);
          setNiacin(0);
          setVitaminB6(0);
          setVitaminB12(0);
          setCholine(0);
          setVitaminK(0);
          setFolate(0);
        }

      })
      
    }
    const weeklyChange = () => {
      setDailyValue(false);
      setWeeklyValue(true);
      setMonthlyValue(false);
      setCheckValue(1);
      if (dailyValue === true && weeklyValue === false && checkValue === 1) {
        setCaloriesLimit(caloriesLimit * 7)
        setProteinLimit(proteinLimit * 7)
        setTotalFatLimit(totalFatLimit * 7)
        setCarbohydratesLimit(carbohydratesLimit * 7)
        setDietaryFiberLimit(dietaryFiberLimit * 7)
        setCalciumLimit(calciumLimit * 7)
        setIronLimit(ironLimit * 7)
        setMagnesiumLimit(magnesiumLimit * 7)
        setPhosphorusLimit(phosphorusLimit * 7)
        setPotassiumLimit(potassiumLimit * 7)
        setSodiumLimit(sodiumLimit * 7)
        setZincLimit(zincLimit * 7)
        setCopperLimit(copperLimit * 7)
        setSeleniumLimit(seleniumLimit * 7)
        setVitaminALimit(vitaminALimit * 7)
        setVitaminELimit(vitaminELimit * 7)
        setVitaminDLimit(vitaminDLimit * 7)
        setVitaminCLimit(vitaminCLimit * 7)
        setThiaminLimit(thiaminLimit * 7)
        setRiboflavinLimit(riboflavinLimit * 7)
        setNiacinLimit(niacinLimit * 7)
        setVitaminB6Limit(vitaminB6Limit * 7)
        setVitaminB12Limit(vitaminB12Limit * 7)
        setCholineLimit(cholineLimit * 7)
        setVitaminKLimit(vitaminKLimit * 7)
        setFolateLimit(folateLimit * 7)
      }

      else if (monthlyValue === false) {
        setCaloriesLimit(caloriesLimit)
        setProteinLimit(proteinLimit )
        setTotalFatLimit(totalFatLimit )
        setCarbohydratesLimit(carbohydratesLimit )
        setDietaryFiberLimit(dietaryFiberLimit )
        setCalciumLimit(calciumLimit )
        setIronLimit(ironLimit )
        setMagnesiumLimit(magnesiumLimit )
        setPhosphorusLimit(phosphorusLimit )
        setPotassiumLimit(potassiumLimit )
        setSodiumLimit(sodiumLimit )
        setZincLimit(zincLimit )
        setCopperLimit(copperLimit )
        setSeleniumLimit(seleniumLimit )
        setVitaminALimit(vitaminALimit )
        setVitaminELimit(vitaminELimit )
        setVitaminDLimit(vitaminDLimit )
        setVitaminCLimit(vitaminCLimit )
        setThiaminLimit(thiaminLimit )
        setRiboflavinLimit(riboflavinLimit )
        setNiacinLimit(niacinLimit )
        setVitaminB6Limit(vitaminB6Limit )
        setVitaminB12Limit(vitaminB12Limit )
        setCholineLimit(cholineLimit )
        setVitaminKLimit(vitaminKLimit )
        setFolateLimit(folateLimit )
      }
      else if (monthlyValue === true) {
        setCaloriesLimit((caloriesLimit / 30) * 7)
        setProteinLimit((proteinLimit/30) * 7)
        setTotalFatLimit((totalFatLimit/30) * 7)
        setCarbohydratesLimit((carbohydratesLimit/30) * 7)
        setDietaryFiberLimit((dietaryFiberLimit/30) * 7)
        setCalciumLimit((calciumLimit/30) * 7)
        setIronLimit((ironLimit/30) * 7)
        setMagnesiumLimit((magnesiumLimit/30) * 7)
        setPhosphorusLimit((phosphorusLimit/30) * 7)
        setPotassiumLimit((potassiumLimit/30) * 7)
        setSodiumLimit((sodiumLimit/30) * 7)
        setZincLimit((zincLimit/30) * 7)
        setCopperLimit((copperLimit/30) * 7)
        setSeleniumLimit((seleniumLimit/30) * 7)
        setVitaminALimit((vitaminALimit/30) * 7)
        setVitaminELimit((vitaminELimit/30) * 7)
        setVitaminDLimit((vitaminDLimit/30) * 7)
        setVitaminCLimit((vitaminCLimit/30) * 7)
        setThiaminLimit((thiaminLimit/30) * 7)
        setRiboflavinLimit((riboflavinLimit/30) * 7)
        setNiacinLimit((niacinLimit/30) * 7)
        setVitaminB6Limit((vitaminB6Limit/30) * 7)
        setVitaminB12Limit((vitaminB12Limit/30) * 7)
        setCholineLimit((cholineLimit/30) * 7)
        setVitaminKLimit((vitaminKLimit/30) * 7)
        setFolateLimit((folateLimit/30) * 7)
      }

      else if (weeklyValue === true) {
        setCaloriesLimit(caloriesLimit)
        setProteinLimit(proteinLimit)
        setTotalFatLimit(totalFatLimit)
        setCarbohydratesLimit(carbohydratesLimit)
        setDietaryFiberLimit(dietaryFiberLimit)
        setCalciumLimit(calciumLimit)
        setIronLimit(ironLimit)
        setMagnesiumLimit(magnesiumLimit)
        setPhosphorusLimit(phosphorusLimit)
        setPotassiumLimit(potassiumLimit)
        setSodiumLimit(sodiumLimit)
        setZincLimit(zincLimit)
        setCopperLimit(copperLimit)
        setSeleniumLimit(seleniumLimit)
        setVitaminALimit(vitaminALimit)
        setVitaminELimit(vitaminELimit)
        setVitaminDLimit(vitaminDLimit)
        setVitaminCLimit(vitaminCLimit)
        setThiaminLimit(thiaminLimit)
        setRiboflavinLimit(riboflavinLimit)
        setNiacinLimit(niacinLimit)
        setVitaminB6Limit(vitaminB6Limit)
        setVitaminB12Limit(vitaminB12Limit)
        setCholineLimit(cholineLimit)
        setVitaminKLimit(vitaminKLimit)
        setFolateLimit(folateLimit)
      }
    
      
      let sumCalories = 0;
      let sumProtein = 0;
      let sumTotalFat = 0;
      let sumTotalCarbohydrates = 0;
      let sumFiber = 0;
      let sumCalcium = 0;
      let sumIron = 0;
      let sumMagnesium = 0;
      let sumPhosphorus = 0;
      let sumPotassium = 0;
      let sumSodium = 0;
      let sumZinc = 0;
      let sumCopper = 0;
      let sumSelenium = 0;
      let sumVitaminA = 0;
      let sumVitaminE = 0;
      let sumVitaminD = 0;
      let sumVitaminC = 0;
      let sumThiamin = 0;
      let sumRiboflavin = 0;
      let sumNiacin = 0;
      let sumVitaminB6 = 0;
      let sumVitaminB12 = 0;
      let sumCholine = 0;
      let sumVitaminK = 0;
      let sumFolate = 0;
      current.setDate(current.getDate() - 7)
      console.log(dateParse(current.toDateString()))
      nutrition.map((nutrients) => {
        if (dateParse(nutrients.createdAt) >= dateParse(current.toDateString())){
          
          sumCalories += nutrients.calories
          setCalories(sumCalories.toFixed(2))

          sumProtein += nutrients.protein
          setProtein(sumProtein.toFixed(2))

          sumTotalFat += nutrients.totalFat
          setTotalFat(sumTotalFat.toFixed(2))

          sumTotalCarbohydrates += nutrients.carbohydrates
          setCarbohydrates(sumTotalCarbohydrates.toFixed(2))

          sumFiber += nutrients.dietaryFiber
          setDietaryFiber(sumFiber.toFixed(2))

          sumCalcium += nutrients.calcium
          setCalcium(sumCalcium.toFixed(2))

          sumIron += nutrients.iron
          setIron(sumIron.toFixed(2))

          sumMagnesium += nutrients.magnesium
          setMagnesium(sumMagnesium.toFixed(2))

          sumPhosphorus += nutrients.phosphorus
          setPhosphorus(sumPhosphorus.toFixed(2))

          sumPotassium += nutrients.potassium
          setPotassium(sumPotassium.toFixed(2))

          sumSodium += nutrients.sodium
          setSodium(sumSodium.toFixed(2))

          sumZinc += nutrients.zinc
          setZinc(sumZinc.toFixed(2))

          sumCopper += nutrients.copper
          setCopper(sumCopper.toFixed(2))

          sumSelenium += nutrients.selenium
          setSelenium(sumSelenium.toFixed(2))

          sumVitaminA += nutrients.vitaminA
          setVitaminA(sumVitaminA.toFixed(2))
          
          sumVitaminE += nutrients.vitaminE
          setVitaminE(sumVitaminE.toFixed(2))

          sumVitaminD += nutrients.vitaminD
          setVitaminD(sumVitaminD.toFixed(2))

          sumVitaminC += nutrients.vitaminC
          setVitaminC(sumVitaminC.toFixed(2))

          sumThiamin += nutrients.thiamin
          setThiamin(sumThiamin.toFixed(2))

          sumRiboflavin += nutrients.riboflavin
          setRiboflavin(sumRiboflavin.toFixed(2))

          sumNiacin += nutrients.niacin
          setNiacin(sumNiacin.toFixed(2))

          sumVitaminB6 += nutrients.vitaminB6
          setVitaminB6(sumVitaminB6.toFixed(2))

          sumVitaminB12 += nutrients.vitaminB12
          setVitaminB12(sumVitaminB12.toFixed(2))

          sumCholine += nutrients.choline
          setCholine(sumCholine.toFixed(2))

          sumVitaminK += nutrients.vitaminK
          setVitaminK(sumVitaminK.toFixed(2))

          sumFolate += nutrients.folate
          setFolate(sumFolate.toFixed(2))
        
        }

      })

    }
    const monthlyChange = () => {
      setDailyValue(false);
      setWeeklyValue(false);
      setMonthlyValue(true);

      if (dailyValue === true && monthlyValue === false && checkValue === 1) {
        setCaloriesLimit(caloriesLimit * 30)
        setProteinLimit(proteinLimit * 30)
        setTotalFatLimit(totalFatLimit * 30)
        setCarbohydratesLimit(carbohydratesLimit * 30)
        setDietaryFiberLimit(dietaryFiberLimit * 30)
        setCalciumLimit(calciumLimit * 30)
        setIronLimit(ironLimit * 30)
        setMagnesiumLimit(magnesiumLimit * 30)
        setPhosphorusLimit(phosphorusLimit * 30)
        setPotassiumLimit(potassiumLimit * 30)
        setSodiumLimit(sodiumLimit * 30)
        setZincLimit(zincLimit * 30)
        setCopperLimit(copperLimit * 30)
        setSeleniumLimit(seleniumLimit * 30)
        setVitaminALimit(vitaminALimit * 30)
        setVitaminELimit(vitaminELimit * 30)
        setVitaminDLimit(vitaminDLimit * 30)
        setVitaminCLimit(vitaminCLimit * 30)
        setThiaminLimit(thiaminLimit * 30)
        setRiboflavinLimit(riboflavinLimit * 30)
        setNiacinLimit(niacinLimit * 30)
        setVitaminB6Limit(vitaminB6Limit * 30)
        setVitaminB12Limit(vitaminB12Limit * 30)
        setCholineLimit(cholineLimit * 30)
        setVitaminKLimit(vitaminKLimit * 30)
        setFolateLimit(folateLimit * 30)
      }

      else if (monthlyValue === true) {
        setCaloriesLimit(caloriesLimit)
        setProteinLimit(proteinLimit)
        setTotalFatLimit(totalFatLimit)
        setCarbohydratesLimit(carbohydratesLimit)
        setDietaryFiberLimit(dietaryFiberLimit)
        setCalciumLimit(calciumLimit)
        setIronLimit(ironLimit)
        setMagnesiumLimit(magnesiumLimit)
        setPhosphorusLimit(phosphorusLimit)
        setPotassiumLimit(potassiumLimit)
        setSodiumLimit(sodiumLimit)
        setZincLimit(zincLimit)
        setCopperLimit(copperLimit)
        setSeleniumLimit(seleniumLimit)
        setVitaminALimit(vitaminALimit)
        setVitaminELimit(vitaminELimit)
        setVitaminDLimit(vitaminDLimit)
        setVitaminCLimit(vitaminCLimit)
        setThiaminLimit(thiaminLimit)
        setRiboflavinLimit(riboflavinLimit)
        setNiacinLimit(niacinLimit)
        setVitaminB6Limit(vitaminB6Limit)
        setVitaminB12Limit(vitaminB12Limit)
        setCholineLimit(cholineLimit)
        setVitaminKLimit(vitaminKLimit)
        setFolateLimit(folateLimit)
      }

      else if (weeklyValue === true && monthlyValue === false) {
        setCaloriesLimit((caloriesLimit / 7) * 30)
        setProteinLimit((proteinLimit / 7) * 30)
        setTotalFatLimit((totalFatLimit / 7) * 30)
        setCarbohydratesLimit((carbohydratesLimit / 7) * 30)
        setDietaryFiberLimit((dietaryFiberLimit / 7) * 30)
        setCalciumLimit((calciumLimit / 7) * 30)
        setIronLimit((ironLimit / 7) * 30)
        setMagnesiumLimit((magnesiumLimit / 7) * 30)
        setPhosphorusLimit((phosphorusLimit / 7) * 30)
        setPotassiumLimit((potassiumLimit / 7) * 30)
        setSodiumLimit((sodiumLimit / 7) * 30)
        setZincLimit((zincLimit / 7) * 30)
        setCopperLimit((copperLimit / 7) * 30)
        setSeleniumLimit((seleniumLimit / 7) * 30)
        setVitaminALimit((vitaminALimit / 7) * 30)
        setVitaminELimit((vitaminELimit / 7) * 30)
        setVitaminDLimit((vitaminDLimit / 7) * 30)
        setVitaminCLimit((vitaminCLimit / 7) * 30)
        setThiaminLimit((thiaminLimit / 7) * 30)
        setRiboflavinLimit((riboflavinLimit / 7) * 30)
        setNiacinLimit((niacinLimit / 7) * 30)
        setVitaminB6Limit((vitaminB6Limit / 7) * 30)
        setVitaminB12Limit((vitaminB12Limit / 7) * 30)
        setCholineLimit((cholineLimit / 7) * 30)
        setVitaminKLimit((vitaminKLimit / 7) * 30)
        setFolateLimit((folateLimit / 7) * 30)
      }

      let sumCalories = 0;
      let sumProtein = 0;
      let sumTotalFat = 0;
      let sumTotalCarbohydrates = 0;
      let sumFiber = 0;
      let sumCalcium = 0;
      let sumIron = 0;
      let sumMagnesium = 0;
      let sumPhosphorus = 0;
      let sumPotassium = 0;
      let sumSodium = 0;
      let sumZinc = 0;
      let sumCopper = 0;
      let sumSelenium = 0;
      let sumVitaminA = 0;
      let sumVitaminE = 0;
      let sumVitaminD = 0;
      let sumVitaminC = 0;
      let sumThiamin = 0;
      let sumRiboflavin = 0;
      let sumNiacin = 0;
      let sumVitaminB6 = 0;
      let sumVitaminB12 = 0;
      let sumCholine = 0;
      let sumVitaminK = 0;
      let sumFolate = 0;
      current.setDate(current.getDate() - 60)
      nutrition.map((nutrients) => {
        if (dateParse(nutrients.createdAt) >= dateParse(current.toDateString())){
          
          sumCalories += nutrients.calories
          setCalories(sumCalories.toFixed(2))

          sumProtein += nutrients.protein
          setProtein(sumProtein.toFixed(2))

          sumTotalFat += nutrients.totalFat
          setTotalFat(sumTotalFat.toFixed(2))

          sumTotalCarbohydrates += nutrients.carbohydrates
          setCarbohydrates(sumTotalCarbohydrates.toFixed(2))

          sumFiber += nutrients.dietaryFiber
          setDietaryFiber(sumFiber.toFixed(2))

          sumCalcium += nutrients.calcium
          setCalcium(sumCalcium.toFixed(2))

          sumIron += nutrients.iron
          setIron(sumIron.toFixed(2))

          sumMagnesium += nutrients.magnesium
          setMagnesium(sumMagnesium.toFixed(2))

          sumPhosphorus += nutrients.phosphorus
          setPhosphorus(sumPhosphorus.toFixed(2))

          sumPotassium += nutrients.potassium
          setPotassium(sumPotassium.toFixed(2))

          sumSodium += nutrients.sodium
          setSodium(sumSodium.toFixed(2))

          sumZinc += nutrients.zinc
          setZinc(sumZinc.toFixed(2))

          sumCopper += nutrients.copper
          setCopper(sumCopper.toFixed(2))

          sumSelenium += nutrients.selenium
          setSelenium(sumSelenium.toFixed(2))

          sumVitaminA += nutrients.vitaminA
          setVitaminA(sumVitaminA.toFixed(2))
          
          sumVitaminE += nutrients.vitaminE
          setVitaminE(sumVitaminE.toFixed(2))

          sumVitaminD += nutrients.vitaminD
          setVitaminD(sumVitaminD.toFixed(2))

          sumVitaminC += nutrients.vitaminC
          setVitaminC(sumVitaminC.toFixed(2))

          sumThiamin += nutrients.thiamin
          setThiamin(sumThiamin.toFixed(2))

          sumRiboflavin += nutrients.riboflavin
          setRiboflavin(sumRiboflavin.toFixed(2))

          sumNiacin += nutrients.niacin
          setNiacin(sumNiacin.toFixed(2))

          sumVitaminB6 += nutrients.vitaminB6
          setVitaminB6(sumVitaminB6.toFixed(2))

          sumVitaminB12 += nutrients.vitaminB12
          setVitaminB12(sumVitaminB12.toFixed(2))

          sumCholine += nutrients.choline
          setCholine(sumCholine.toFixed(2))

          sumVitaminK += nutrients.vitaminK
          setVitaminK(sumVitaminK.toFixed(2))

          sumFolate += nutrients.folate
          setFolate(sumFolate.toFixed(2))
        
        }

      })
      

    }


    
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
      <div>
      <Container>
        <Row className="form">
          <Col className="page-bottom">
            <Card>
              <Card.Header>Nutrition Summary</Card.Header>
                <Card.Body>
                  <p>* Nutrition goals set based off age and gender according to the USDA dietary guidelines for americans.</p>
                  <ButtonGroup size="sm" className="mb-2">
                    <Button variant="outline-primary" onClick={dailyChange} active={dailyValue}>Today</Button>
                    <Button variant="outline-primary" onClick={weeklyChange} active ={weeklyValue}>Last 7 Days</Button>
                    <Button variant="outline-primary" onClick={monthlyChange} active={monthlyValue}>Last 30 Days</Button>
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
                  <Button size="sm" variant="outline-primary" className="me-2" onClick={() => navigate('/viewFood')}>All Foods</Button>
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

