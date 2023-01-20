import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NutritionSearch = () => {
    const [food, setFood] = useState([])
    const[foodQuery, setFoodQuery] = useState("")
    const [foodIndex, setFoodIndex] = useState(false)
    const [nutrients, setNutrients] = useState([])
    const [foodSearch, setFoodSearch] = useState(false)
    const [foodName, setFoodName] = useState('')
    const [portion, setPortion] = useState(100)

    const foodHandler = (e) => {
        e.preventDefault();
        console.log(foodQuery)
        console.log(foodIndex)
        const params = {
            api_key: 'ma4EHu5hkEyGjQ5cwZeB9BjYd9iMg6XxzzmXqkMV',
            query: `${foodQuery}`,
            dataType: ['Survey (FNDDS)'],
            pagesize: 100,
        }
    
            axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`)
            .then(res => {
                setFood(res.data.foods)
                setFoodQuery("")
                setNutrients([])
                setFoodIndex(false)
                setFoodSearch(true)
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
        setFoodName(food[foodId].description)
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
    <div className='background-image'>
        <Container>
            <Row>
                <Col className='form'>
                </Col>
            </Row>
            <Row className=''>
                <Col className='mb-3' >
                    <Card border="light" style={{ width: '20rem' }} >
                        <Card.Header>Nutrition Base</Card.Header>
                        <Card.Body>
                        <Card.Title>View Nutrition <img className='rounded' src='/Buffer-Progress-Bar.jpg' alt="blueCircle" width={30} height={30} /></Card.Title>
                        <Card.Text>
                            Access quick nutrition facts about your favorite foods to better understand your diet.
                        </Card.Text>
                        <Card.Text>
                        <Form onSubmit = {foodHandler}>
                        <Form.Group className='mb-3 col-sm-8'>
                            <Form.Label>Food Search</Form.Label>
                            <Form.Control type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button size='sm' type="submit" variant='outline-primary' className='mb-3'>Search</Button>
                    </Form>
                    <div className='foodScroll'>
                    {food.map((foods, index)=>
                            <div key={foods.fdcId} >
                                <Button variant="outline-dark" className='mb-2' size='sm' onClick = {(e) => {nutrientHandler(index)}}>{foods.description}</Button>
                            </div>
                    )}
                    </div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='page-bottom' >
            {foodIndex ===true ?
            <Card
            border='light'
            style={{ width: '20rem'}}
            className="">
                <Card.Header className='nutrientName'>Nutrition Facts: {foodName}</Card.Header>
                <Card.Body>
                    <Card.Title>
                    <Form onSubmit = {portionHandler}>
                <Form.Group>
                    <Form.Label className='portion'>Portion Size (g)</Form.Label>
                    <Form.Control type='text' value={portion} onChange = {(e) => setPortion(e.target.value)} style={{ width: '5rem'}} className='portion'></Form.Control>
                </Form.Group>
            </Form>
                    </Card.Title>
                    <div className='scroll'>
                    {nutrients.map((foodNutrients, index) =>
                        <p className='mb-0' key = {index}><span className='nutrientName'>{foodNutrients.nutrientName}</span>: {((portion/100)*foodNutrients.value).toFixed(2)} {(foodNutrients.unitName).toLowerCase()}</p>
                    )}
                    </div>
                </Card.Body>
            </Card>
            :null}
            </Col>
            </Row>

        </Container>
    </div>
  )
}


{/* <div className='main'>
                        <Card.Header><span className='nutrientName'>Try it out!</span></Card.Header>
                        <Card.Body>
                        <Card.Text className='submain'>Search the nutrition facts for some of your favorite foods!</Card.Text>
                        <Card.Text>
                        <Form onSubmit = {foodHandler}>
                        <Form.Group className='mb-3 col-sm-8'>
                            <Form.Label>Food Search</Form.Label>
                            <Form.Control type='text' value={foodQuery} onChange = {(e) => setFoodQuery(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Button size='sm' type="submit" variant='outline-primary' className='mb-3'>Search</Button>
                    </Form>
                    <div className='foodScroll'>
                    {food.map((foods, index)=>
                            <div key={foods.fdcId} >
                                <Button variant="outline-success" className='mb-2' size='sm' onClick = {(e) => {nutrientHandler(index)}}>{foods.description}</Button>
                            </div>
                    )}
                    </div>
                        </Card.Text>
                        </Card.Body>
                        </div> */}
export default NutritionSearch;