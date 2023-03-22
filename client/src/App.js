import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import { useState } from 'react';
import NutritionSearch from './components/NutritionSearch';
import GoalDashboard from './components/GoalDashboard';
import ViewFood from './components/ViewFood';
import { AnimatePresence } from 'framer-motion';
import UpdatePortion from './components/UpdatePortion';
import Chat from './components/Chat';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <div>

      
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path={'/'} element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path={'/nutrition'} element={<NutritionSearch loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path={'/login'} element={<UserLogin setLoggedIn={setLoggedIn} />} />
          <Route path={'/register'} element={<UserRegistration setLoggedIn={setLoggedIn} />}/>
          <Route path={'/dashboard'} element={<GoalDashboard setLoggedIn={setLoggedIn} />} />
          <Route path={'/viewFood'} element={<ViewFood setLoggedIn={setLoggedIn} />} />
          <Route path={'/updatePortion/:id'} element={<UpdatePortion setLoggedIn={setLoggedIn} />} />
          <Route path={'/chat'} element={<Chat setLoggedIn={setLoggedIn} />} />
          
        </Routes>
        </AnimatePresence>
      
 
    </div>
  );
}

export default App;
