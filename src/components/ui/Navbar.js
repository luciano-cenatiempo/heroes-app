import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()
    // TODO: por hacer
    const handleLogout = () => {

        const action = {
            type: types.logout

        }

        dispatch(action);

        navigate('/login', {
            replace: true
        })
    }

    const toggleMenu = () => {
        const menu = document.querySelector('#navbartoggle');

            menu.classList.toggle('collapse');
        
    }

    const collapseMenu = ()  => {
        const menu = document.querySelector('#navbartoggle');
        !menu.classList.contains('collapse') && toggleMenu();
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
            <div className="container-fluid">

            <Link
                className="navbar-brand"
                to="/"
            >
                Home
            </Link>

            <button className="navbar-toggler" onClick={toggleMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggle" aria-controls="navbartoggle-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse " id="navbartoggle">
                <div className="navbar-nav " >

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                        to="/marvel"
                        onClick={collapseMenu}
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                        to="/dc"
                        onClick={collapseMenu}

                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link' + (isActive ? ' active' : '')}
                        to="/search"
                        onClick={collapseMenu}

                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse  w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <span className='nav-link nav-item text-info'>
                    {user.name && user.name}
                </span>

                <ul className="navbar-nav ml-auto">
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
            </div>
        </nav>
       
    )
}