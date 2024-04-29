import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";

// object that describes the change that will happen

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

//  in redux its actions can only execute synchronous sequences, and with thunk redux can execute async sequences

// function that returns another function
export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
  };
