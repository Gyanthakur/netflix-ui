import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Netflix from './pages/Netflix'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import UserListedMovies from './pages/UserListedMovies';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route exact path="/login" element={<Login/>} />
     <Route exact path="/signup" element={<Signup/>} />
     <Route exact path="/player" element={<Player/>} />
     <Route exact path="/movies" element={<Movies/>} />
     <Route exact path="/tv" element={<TVShows/>} />
     <Route exact path="/list" element={<UserListedMovies/>} />
     <Route exact path="/" element={<Netflix/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
