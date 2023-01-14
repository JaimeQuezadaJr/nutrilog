import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


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
        <Container className=''>
            <Row>
                <Col>
            <Form className='form' onSubmit = {foodHandler}>
                <Form.Group className='mb-3 col-md-4'>
                    <Form.Label>Food Search</Form.Label>
                    <Form.Control type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant='outline-primary' className='mb-3 search'>Search</Button>
            </Form>
        
            {food.map((foods, index)=>
            <div key={foods.fdcId}>
                <Button variant="outline-success" className='mb-2' size='sm' onClick = {(e) => {nutrientHandler(index)}}>{foods.description}</Button>
            </div>
            )}
            </Col>
            <Col className='form'>
            {foodIndex ===true ?
            <Card
            border='success'
            style={{ width: '20rem'}}
            className="mb-2">
                <Card.Header>Nutrition Facts</Card.Header>
                <Card.Body className='scroll'>
                    <Card.Title>
                    <Form onSubmit = {portionHandler}>
                <Form.Group>
                    <Form.Label className='portion'>Portion Size (g)</Form.Label>
                    <Form.Control type='text' value={portion} onChange = {(e) => setPortion(e.target.value)}></Form.Control>
                </Form.Group>
            </Form>
                    </Card.Title>
                    {nutrients.map((foodNutrients, index) =>
                        <p className='mb-0' key = {index}>{foodNutrients.nutrientName}: {((portion/100)*foodNutrients.value).toFixed(2)} {(foodNutrients.unitName).toLowerCase()}</p>
                    )}
                    
                </Card.Body>
            </Card>
            :null}
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home;