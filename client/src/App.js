import './App.css';
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import About from './components/About';
import { useState } from 'react';
import NutritionSearch from './components/NutritionSearch';
import GoalDashboard from './components/GoalDashboard';
import DeleteFood from './components/DeleteFood';
import { AnimatePresence, motion } from 'framer-motion';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <div>

      <AnimatePresence mode='wait'>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes location={location} key={location.pathname}>
          <Route path={'/'} element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path={'/nutrition'} element={<NutritionSearch loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path={'/login'} element={<UserLogin setLoggedIn={setLoggedIn} />} />
          <Route path={'/register'} element={<UserRegistration setLoggedIn={setLoggedIn} />}/>
          <Route path={'/about'} element={<About setLoggedIn={setLoggedIn} />} />
          <Route path={'/dashboard'} element={<GoalDashboard setLoggedIn={setLoggedIn} />} />
          <Route path={'/deleteFood'} element={<DeleteFood setLoggedIn={setLoggedIn} />} />
        </Routes>
        </AnimatePresence>
      
 
    </div>
  );
}

export default App;
