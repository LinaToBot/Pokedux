// Inmutabilidad

// Algo que no puede ser cambiado después de su creación

// ¿Por que es importante y en que se relaciona con Redux?

// Redux no indicara a la UI que debe renderizar
// nuevamente si su estado inicial y el estado retornado
// son exactamente iguales

// Mutabilidad en JS

const updateLikes = (userInfo) => {
  userInfo.age = userInfo.age + 1;
  return userInfo;
};

const pokemonInfo = {
  name: "gastly",
  like: 25,
};

console.log("Before pokemonInfo: ", pokemonInfo); // {name: 'gastly', age: 25'}

const updatePokemonInfo = updateLikes(pokemonInfo);
console.log("After pokemonInfo: ", pokemonInfo); // {name: 'gastly', age: 26'}
console.log("updateUserInfo: ", updatePokemonInfo); // {name: 'gastly', age: 26'}

//Object.assign
const updateAge = (userInfo) => {
  return Object.assign({}, userInfo, { age: userInfo.age + 1 });
};

const userInfo = {
  name: "juan",
  age: 25,
  email: "jl@gmail.com",
};

console.log("Before userInfo: ", userInfo); // {name: 'juan', age: 25, email: 'jl@gmail.com'}

const updateUserInfo = updateAge(userInfo);
console.log("After userInfo: ", userInfo); // {name: 'juan', age: 25, email: 'jl@gmail.com'}
console.log("updateUserInfo: ", updateUserInfo); // {name: 'juan', age: 26, email: 'jl@gmail.com'}

// Spread Operator
const updateNumber = (userNumber) => {
  return { ...userNumber, number: userNumber.number + 1 };
};

const userNumber = {
  name: "juan",
  number: 25,
  email: "jl@gmail.com",
};

console.log("Before userInfo: ", userNumber); // {name: 'juan', number: 25, email: 'jl@gmail.com'}

const updatedNumber = updateNumber(userNumber);
console.log("After userInfo: ", userNumber); // {name: 'juan', number: 25, email: 'jl@gmail.com'}
console.log("updateUserInfo: ", updatedNumber); // {name: 'juan', number: 26, email: 'jl@gmail.com'}

// Desventajas

// Generación constante de objetos
// Propenso a errores humanos
// Menos trazabilidad
// Otro factor a tener en cuenta es que tanto el Spread
// Operator como Object.assing no funcionan con objetos
// que tienen otros objetos por dentro, lo que estaríamos
// copiando seria la referencia al objeto

const obj = { name: "juan", age: 25, pleasures: { color: "black" } };
const obj2 = { ...obj };

console.log(obj); // {name: 'juan', age: 25, pleasures: {color: 'black'}}
console.log(obj2); // {name: 'juan', age: 25, pleasures: {color: 'black'}}
console.log(obj.belongings == obj2.belongings); // true

// si modificamos alguna propiedad del objeto numero uno,
// la del objeto numero dos quedaría igual, son objetos
// con clave y valor igual, pero son objetos diferentes, //
// es decir, tienen una referencia distinta

const obj = { name: "juan", age: 25, pleasures: { color: "black" } };
const obj2 = { ...obj };

obj.name = "oscar";

console.log(obj); // {name: 'oscar', age: 25, pleasures: {color: 'black'}}
console.log(obj2); // {name: 'juan', age: 25, pleasures: {color: 'black'}}
console.log(obj.belongings == obj2.belongings); // true
// pero si llegamos a modificar el color (propiedad del objeto dentro del objeto)

const obj = { name: "juan", age: 25, pleasures: { color: "black" } };
const obj2 = { ...obj };

obj.pleasures.color = "white";

console.log(obj); // {name: 'juan', age: 25, pleasures: {color: 'white'}}
console.log(obj2); // {name: 'juan', age: 25, pleasures: {color: 'white'}}
console.log(obj.belongings == obj2.belongings); // true
// vemos que tanto en el objeto numero uno como en el
// objeto numero dos la propiedad color cambio, ambos
// objetos en su propiedad pleasures tienen como valor la
// referencia a un mismo objeto
