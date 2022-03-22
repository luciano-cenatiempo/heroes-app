import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/herocard.css'

const heroesImages = require.context('../../assets',true);

export const HeroCard = ({
    id,
    superhero,
}) => {

    // const imagePath = `/assets/${id}.jpg`;

    return (
        <div className='col animate__animated animate__fadeIn'>

            <div className='card hero-card '>
                <div className='row no-gutters'>
                    <div className='col-12 content-image'>
                        <img src={heroesImages(`./${id}.jpg`)} className='card-img' alt={superhero} />
                    </div>
                    <div className='col-12  content-info'>
                        <div className='card-body'>
                            <h5 className='card-title'>{ superhero }</h5>

                            <Link to = {`/hero/${id}`} className="hero-link">
                                More...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
