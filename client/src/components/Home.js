import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {
    const [food, setFood] = useState([])
    const[foodQuery, setFoodQuery] = useState("")
    const [foodIndex, setFoodIndex] = useState(false)
    const [nutrients, setNutrients] = useState([])
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
        setNutrients(food[foodId].foodNutrients)
        setFoodIndex(true)
        console.log(food[foodId].foodNutrients)
    }
    const portionHandler = () => {
        console.log("hello")
        console.log(foodIndex)
    }
    
    
  return (
    <div>
        <h1>dietlog</h1>
        <form onSubmit = {foodHandler}>
            <p>
                <label htmlFor='foodQuery'>Food Search</label>
                <input type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}/>
            </p>
            <input type="submit" value="Search"/>
        </form>
        {food.map((foods, index)=>
        <div key={foods.fdcId}>
            <button onClick = {(e) => {nutrientHandler(index)}}>{foods.description}{index}</button>
        </div>
        )}
        {foodIndex === true ? <button onClick = {(e) => {portionHandler}}>Portion</button> : (null)}
        {nutrients.map((foodNutrients, index) =>
            <div key = {index}>
                <p>{foodNutrients.nutrientName}: {foodNutrients.value} {foodNutrients.unitName}</p>
            </div>
            )}
        
        
    </div>
  )
}

export default Home;