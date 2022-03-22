import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher] );

    return (

        <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3 animate__animated animate__fadeIn herolist-content'>

            {heroes.map(hero => (
                <HeroCard
                    key={hero.id}
                    {...hero} // esto para que me pase las propiedades desestructurando el objeto
                />

            ))}

        </div>
    );
};
