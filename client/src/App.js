import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import About from './components/About';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/login'} element={<UserLogin setLoggedIn={setLoggedIn} />} />
          <Route path={'/register'} element={<UserRegistration setLoggedIn={setLoggedIn} />}/>
          <Route path={'/dashboard/'} element={<GoalDashboard setLoggedIn={setLoggedIn} />} />
          <Route path={'/about'} element={<About setLoggedIn={setLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
