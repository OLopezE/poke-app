import Pokecard from "./components/pokecard";
import Pokelist from "./components/pokelist";
import Navbar from "./components/navbar";
import './components/style.css'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pokelist/>
      <Pokecard/>
    </div>
  );
}

export default App;
