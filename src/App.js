import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Searcher } from "./components/Searcher";
import logo from "./statics/logo.svg";
import { getPokemon } from "./api";
import "./App.css";
import PokemonList from "./components/PokemonList";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { get } from "immutable";

function App() {
  const pokemons = useSelector((state) => get(state, "pokemons")).toJS();
  const loading = useSelector((state) => get(state, "loading"));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
