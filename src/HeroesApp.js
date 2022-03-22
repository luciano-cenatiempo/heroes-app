import React, {useReducer,useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false}; // busca en localStorage si existe usuario y sino devuelve objeto con logged en false
}
// si hay usuario en el localStorage va a hacer un get.

export const HeroesApp = () => {

    const [user,dispatch] = useReducer( authReducer, {}, init )
    
    // el useEffect hace que cuando cambie el usuario, tanto si se vuelve logged false como si hace login un usuario,lo setea en localStorage.
    useEffect(()=>{
        if(!user) return;

        localStorage.setItem('user',JSON.stringify(user));
    },[user]);
    
    return (
        <AuthContext.Provider value={ {
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>

    );
};
