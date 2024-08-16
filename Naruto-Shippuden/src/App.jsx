import React, { useEffect, useState } from 'react'
import './App.css'
import NavBar from "./Components/NavBar";

import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import CharacterList from "./Components/CharacterList.jsx";


import { AuthContext } from "src/Context/Authcontext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './Components/NotFound';
 

const App = () => {
  const [characters , setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //fetch characters

  useEffect(() => {
    const fetchCharacters = async () => {
      try{
        const response = await fetch ('https://dattebayo-api.onrender.com');
        const data = await 
        response.json();
        setCharacters(data);
        setLoading(false);
      }catch (error) {
        console.error("Error finding characters:", error);
        setLoading(false);
      }
      
    };
  }, [])
  //authentification
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChange((user) => {
      setUser(user);
    });
  }, []);



  return (
    <AuthContext value={{user, setUser }}>
      <Router>
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList Characters={Characters} loading={loading} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for unkown pages */} 

      </Routes>
    
    </div>
    </Router>
    </AuthContext>
  )
};

export default App;
