import { fromJS, get, getIn, setIn } from "immutable";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../actions/types";

const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export const pokemonsReducer = (state = initialState, action) => {
  // se accede diferente con immutable 4.0.0
  switch (action.type) {
    case SET_POKEMONS:
      // action.action.payload, porque uso un midleware q modifica el listado
      // return setIn(state, ["pokemons"], fromJS(action.action.payload));
      return setIn(state, ["pokemons"], fromJS(action.payload));
    case SET_LOADING:
      return setIn(state, ["loading"], action.payload);
    case SET_FAVORITE:
      const currentPokemonIndex = get(state, "pokemons").findIndex(
        (pokemon) => pokemon.get("id") === action.payload.pokemonId
      );

      if (currentPokemonIndex < 0) {
        return state;
      }

      const isFavorite = getIn(state, [
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);

      return setIn(
        state,
        ["pokemons", currentPokemonIndex, "favorite"],
        !isFavorite
      );
    default:
      return state;
  }
};
