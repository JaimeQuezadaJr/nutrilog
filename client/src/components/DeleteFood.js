import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

const DeleteFood = ({setLoggedIn}) => {
    const [user, setUser] = useState("");
    const [food, setFood] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

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
              setFood(res.data)
            })
            .catch(err => console.log(err));
            
          })
          .catch((err) => {
            console.log(err)
            navigate('/');
          }
          ); 
      }, []);
    const deleteMovie = (id) => {
        axios
          .delete(`http://localhost:8000/api/nutrition/${id}`, { withCredentials: true})
          .then((res) => {
            navigate('/dashboard');
          })
          .catch((err) => console.log(err));
      };
  return (
    <div className='form'>
                    {food.map((foods, index)=>
                            <div key={index}>
                                <p className='m-0'>{foods.foodTitle}</p>
                                <Button variant="outline-danger" className='' size='sm' onClick = {(e) => {deleteMovie(foods._id)}}>Delete</Button>
                            </div>
                    )}
                    </div>
  )
}

export default DeleteFood