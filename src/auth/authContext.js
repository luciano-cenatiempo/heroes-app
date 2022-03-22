import { createContext } from 'react';


// El nombre del hook de nuestro context va en mayuscula
// debemos envolver con el context la parte mas alta de nuestra aplicacion. 
// Hay que tratar de no usarlo en el index.js para que no haya mas informacion de la necesaria.
export const AuthContext = createContext();