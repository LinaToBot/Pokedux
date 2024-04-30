import { useEffect } from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Searcher } from "./components/Searcher";
import logo from "./statics/logo.svg";
import PokemonList from "./components/PokemonList";
import { fetchPokemonsWithDetails } from "./slicesOrFeatures/dataSlice";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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

// note
// La comparación a profundidad verifica si los objetos son idénticos en estructura y valor, incluyendo todas las propiedades anidadas. A pesar de que las propiedades nombre y tipo tienen los mismos valores en ambos objetos, la comparación a profundidad devuelve false porque los objetos en sí no son idénticos en estructura. son dos objetos diferentes . shallowEqual es útil cuando solo necesitas comparar las propiedades de nivel superior de objetos, evitando renders innecesarios en componentes de React al utilizar Redux. Si necesitas comparar objetos en su totalidad, incluyendo propiedades anidadas, una comparación a profundidad es necesaria.
