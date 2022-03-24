import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

// const heroImages = require.context('./assets',true) // esto es propio de webpack, ponemos el true para que busque en subdirectorios. 

export const HeroScreen = () => {

    const {heroId} = useParams() // con esto que importamos de react-router-dom manejamos los parametros de las rutas
    
    const hero = useMemo( () => getHeroById(heroId), [heroId]); 
    
    const navigate = useNavigate();

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    if(!hero){
        return <Navigate to ='/'/> // este componente navigate hay que importarlo de react-router-dom porque necesitamos devolver un componente si o si. aca no se puede usar useNavigate()
    }

    const imagePath = `../../assets/${id}.jpg`

    const handleReturn = () =>{

        navigate( -1 ); // con el -1 volvemos atrás a la pagina
    }
    console.log('actualizado')
    return (
        <div className='row mt-5'>
            <div className='col-8 col-sm-7 col-md-4 mx-auto'>
                <img 
                    src={imagePath}
                    alt = {superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-12  col-md-8 animate__animated animate__fadeIn'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush '>
                    <li className='list-group-item '><b>Alter ego:</b> {alter_ego}</li>
                    <li className='list-group-item'><b>Publisher:</b> {publisher}</li>
                    <li className='list-group-item'><b>First appearence:</b> {first_appearance}</li>
                </ul>
                
                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className='btn btn-outline-info mb-4'
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
            

        </div>
    );
};
