import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import logo from "./statics/logo.svg";
import { getPokemon } from "./api";
import "./App.css";
import PokemonList from "./components/PokemonList";
import { setPokemons as setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  // const [pokemons, setPokemons] = useState([]);

  console.log("con redux", pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
