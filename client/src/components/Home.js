import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';


const Home = ({loggedIn, setLoggedIn}) => {
    const [food, setFood] = useState([])
    const[foodQuery, setFoodQuery] = useState("")
    const [foodIndex, setFoodIndex] = useState(false)
    const [nutrients, setNutrients] = useState([])
    const [nutrientValues, setNutrientValues] = useState([])
    const [portion, setPortion] = useState(100)
    const foodHandler = (e) => {
        e.preventDefault();
        console.log(foodQuery)
        console.log(foodIndex)
        const params = {
            api_key: 'ma4EHu5hkEyGjQ5cwZeB9BjYd9iMg6XxzzmXqkMV',
            query: `${foodQuery}`,
            dataType: ['Survey (FNDDS)'],
            pagesize: 10,
        }
    
            axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`)
            .then(res => {
                setFood(res.data.foods)
                setFoodQuery("")
                setNutrients([])
                setFoodIndex(false)
                console.log(res.data)
                console.log(res.data.foods)
                console.log(res.data.foods[0].foodNutrients)
            })
            .catch((err) => {
                console.log('Something went wrong', err)
            })
    }
    const nutrientHandler = (foodId) => {
        console.log(foodId)
        console.log([food])
        setNutrients(food[foodId].foodNutrients)
        setFoodIndex(true)
        console.log(food[foodId].foodNutrients)
    }
    const portionHandler = (e) => {
        e.preventDefault();
        console.log("hello")
        console.log(foodIndex)
        const realPortion = portion/100
        console.log(realPortion)
        console.log(nutrients[0].value)
        console.log([nutrients])
    }
    
    
  return (
    <div>
        <Form className='form' onSubmit = {foodHandler}>
            <Container className='mt-5'>
                <Form.Group className='mb-3 col-md-4'>
                    <Form.Label>Food Search</Form.Label>
                    <Form.Control type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Search</Button>
            </Container>
        
        
        </Form>
        {food.map((foods, index)=>
        <div key={foods.fdcId}>
            <button onClick = {(e) => {nutrientHandler(index)}}>{foods.description}{index}</button>
        </div>
        )}
        {foodIndex === true ? 
        // <button onClick = {(e) => {portionHandler()}}>Portion</button>
        //  <select>
        //     <option>Select Portion Size</option>
        //     <option>200G</option>
        //  </select>
        <form onSubmit = {portionHandler}>
            <p>
                <label htmlFor='portion'>Portion</label>
                <input type='text' value={portion} onChange = {(e) => setPortion(e.target.value)}/>g
            </p>
            <input type="submit" value="Search"/>
        </form>
         : (null)}
        {nutrients.map((foodNutrients, index) =>
            <div key = {index}>
                <p>{foodNutrients.nutrientName}: {((portion/100)*foodNutrients.value).toFixed(2)} {(foodNutrients.unitName).toLowerCase()}</p>
            </div>
            )}
        
        
    </div>
  )
}

export default Home;