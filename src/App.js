import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";

import Pokecard from "./components/pokecard";
import Pokelist from "./components/pokelist";
import Pokedex from "./pages/pokedex";
import Navbar from "./components/navbar";
import Pokemondetail from "./components/Pokemondetail";
import './components/style.css'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Pokedex/>}>
          </Route>
          <Route path='/pokedex' element={<Pokedex/>}>
          </Route>
          <Route path='/pokemon/:id' element={<Pokemondetail/>}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
