// Para usar Redux en un proyecto de frontend con React utilizando Redux Toolkit, puedes seguir estos pasos:

// Instala Redux Toolkit:
// Comienza instalando Redux Toolkit en tu proyecto:
// bash

// npm install @reduxjs/toolkit react-redux

// Define tus slices:
// Redux Toolkit utiliza "slices" para definir el estado y las acciones. Un slice es un conjunto de acciones y un reductor que maneja esas acciones. Crea tus slices para definir el estado de tu aplicación y las acciones que pueden modificar ese estado.
// Crea tu Store:
// Utiliza configureStore de Redux Toolkit para crear tu store. Puedes combinar varios slices en un solo store utilizando la función combineReducers de Redux Toolkit.
// Conecta tu aplicación a Redux:
// Utiliza el componente Provider proporcionado por react-redux para envolver tu aplicación. Esto proporcionará acceso al store de Redux en toda tu aplicación.
// Conecta tus componentes a Redux:
// Utiliza los hooks useSelector y useDispatch proporcionados por react-redux para conectar tus componentes al store de Redux. useSelector te permite acceder al estado del store, mientras que useDispatch te permite despachar acciones.
// Aquí tienes un ejemplo básico de cómo podrías configurar Redux Toolkit en tu proyecto:

// En tu archivo slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// create store en index js.


// En tu archivo index js.
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import { legacy_createStore as createStore } from "redux";

const store = createStore(rootReducer, composedEnhancer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
      {/* // aqui esta el <counter/>, dentro de App */}
    </Provider>
  </React.StrictMode>
);

export default Apps;

// En tu archivo Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './slice';

function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;