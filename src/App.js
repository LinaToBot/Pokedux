import { useEffect } from "react";
import { Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Searcher } from "./components/Searcher";
import logo from "./statics/logo.svg";
import { getPokemon } from "./api";
import "./App.css";
import PokemonList from "./components/PokemonList";
import { getPokemonsWithDetails } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();

      dispatch(getPokemonsWithDetails(pokemonsRes));
    };
    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col style={{ width: 250 }} span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
