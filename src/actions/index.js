import { SET_POKEMONS } from "./types";

// object that describes the change that will happen
export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
