import { types } from '../types/types'

// ASI ES COMO SE VE EL ESTADO DE NUESTRO REDUCER
// const state = {
//     name: 'luciano',
//     logged: true
// }

//  CUANDO HAGAMOS EL LOGOUT SE VA A BORRAR EL NAME Y SOLO VA QUEDAR EL LOGGED EN FALSE
// const state = {
//     logged: false
// }

// ESTO ES LO QUE LE VAMOS A MANDAR A LA ACTION, PARA QUE HAGA EL LOGIN O LOGOUT
// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'luciano',
//         email: 'lucho@correo.com'
//     }
// }


export const authReducer = (state= {}, action) =>{
    
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        
        case types.logout: {
            return{
                logged: false
            }
        }
                
        default:
            return state; // esto hay que hacerlo siempre para manejar la excepcion
    }
}