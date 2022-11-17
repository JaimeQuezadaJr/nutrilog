import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {
    const [food, setFood] = useState([])
    const[foodQuery, setFoodQuery] = useState("")
    const [foodIndex, setFoodIndex] = useState(null)
    const [foodNutrients, setFoodNutrients] = useState([])
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
        console.log('hello')
    
            axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`)
            .then(res => {
                setFood(res.data.foods)
                setFoodQuery("")
                console.log(res.data)
                console.log(res.data.foods)
                console.log(res.data.foods[foodIndex].foodNutrients)
            })
            .catch((err) => {
                console.log('Something went wrong', err)
            })
    }
    const nutrientHandler = (e) => {
        console.log(foodQuery)
        console.log(foodIndex)
        const params = {
            api_key: 'ma4EHu5hkEyGjQ5cwZeB9BjYd9iMg6XxzzmXqkMV',
            query: `${foodQuery}`,
            dataType: ['Survey (FNDDS)'],
            pagesize: 10,
        }
        console.log('hello')
    
            axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`)
            .then(res => {
                setFood(res.data.foods)
                setFoodQuery("")
                console.log(res.data)
                console.log(res.data.foods)
                console.log(res.data.foods[foodIndex].foodNutrients)
            })
            .catch((err) => {
                console.log('Something went wrong', err)
            })
    }
  return (
    <div>
        <h1>Home</h1>
        <form onSubmit = {foodHandler}>
            <p>
                <label htmlFor='foodQuery'>Food Search</label>
                <input type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}/>
            </p>
            <input type="submit" value="Search"/>
        </form>
        {food.map((foods, index)=>
        <div key={foods.fdcId}>
            <button onClick = {nutrientHandler}>{foods.description}{index}</button>
        </div>
        )}
    </div>
  )
}

export default Home;