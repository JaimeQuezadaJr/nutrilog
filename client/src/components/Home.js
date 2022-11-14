import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {
    const [food, setFood] = useState([])
    const[foodQuery, setFoodQuery] = useState('')
    const onSubmitHandler = (e) => {
        // e.preventdefault();
        const params = {
            api_key: 'ma4EHu5hkEyGjQ5cwZeB9BjYd9iMg6XxzzmXqkMV',
            query: 'banana',
            dataType: ['Survey (FNDDS)'],
            pagesize: 10,
        }
        console.log('hello')
        
        
            axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`)
            .then(res => {
                console.log(res.data.foods)
                setFood(res.data.foods)
            })
            .catch((err) => {
                console.log('Something went wrong', err)
            })
        
        

    }
  return (
    <div>
        <h1>Home</h1>
        <form onSubmit = {onSubmitHandler}>
            <p>
                <label htmlFor='foodSearch'>Food Search</label>
                <input type='text' value={foodQuery} onChange = {(e) => setFood(e.target.value)}/>
            </p>
            <input type="button" value="Create" onClick={onSubmitHandler}/>
        </form>
        {food.map((foods, index)=>
        <div key={index}>
            <p>{foods.description}</p>
        </div>
        )}
    </div>
  )
}

export default Home;