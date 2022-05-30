import { HashRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import PokemonDetails from "./components/PokemonDetails";
import PokedexInput from "./components/PokedexInput";
import ProtectedRoutes from "./hooks/ProtectedRoutes";
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<PokedexInput />} />
          <Route element={<ProtectedRoutes />} >
            <Route path="/Pokedex" element={<Pokedex />} />
            <Route path="/Pokedex/:id" element={<PokemonDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
