import React, {useReducer,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  
  const {dispatch} = useContext ( AuthContext);

  const navigate = useNavigate(); // me ofrece una funcion que me permite navegar a otras pantallas.

  const handleLogin = ()=>{
    // usamos el reducer para loguearnos . El dispatch lo importamos del context.
    const action = {
      type: types.login,
      payload: {
        name: 'Guest',
      }
    }

    dispatch(action);

    const lastLocation = localStorage.getItem('lastPath') || '/';
    navigate(lastLocation ,{
      replace : true // con el replace en true nos impide volver al login
    });
  }
  return (
  <div className = "container mt-5">
      <h1>Heroes App</h1>
      <h2>Login</h2>
      <hr/>

      <div className='alert-danger text-danger p-3 m-2 rounded col-lg-5'>
          <p>This section simulates the interactions of a login. Until the backend is ready, you can enter as a guest user only.</p>
      </div>

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login as a guest
      </button>
  </div>
  );
};