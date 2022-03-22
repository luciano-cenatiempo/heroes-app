import React,{useContext} from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PrivateRoute = ({children}) => {
    
    // si ponemos la prop children, todos los elementos hijos del component pasan como una property llamada children
    const {user} = useContext(AuthContext)
    const {pathname, search} = useLocation();

    localStorage.setItem('lastPath', pathname + search);

    return user.logged
        ? children
        : <Navigate to ="/login" />
}
