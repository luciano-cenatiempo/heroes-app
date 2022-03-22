import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesbyName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  //desestructuro q de la query y si no viene nada manda '' 
  const { q = '' } = queryString.parse(location.search);

  // El useForm devuelve dos valores, el values que es un objeto con la llave searchText y el handleInputcahnge que cambia el estado.
  const [values, handleInputChange] = useForm({
    searchText: q,
  })

  const { searchText } = values // desestructuramos el values para manipular el searchText directamente 

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)

  }
  return <div className=''>
    <h1 className='mt-4'>Search</h1>
    <hr />
    <div className='row'>
      <div className='col-12 col-sm-5'>
        <h4>Search</h4>
        <hr />

        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder="Search a hero"
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={searchText} // es el valor del estado del input, empieza en '' y despues lo cambia el handleINputchange
            onChange={handleInputChange} // cambia el valor del estado del input
          />

          <button
            className='btn btn-outline-primary mt-1 mb-4'
            type='submit'
          >
            Search
          </button>

        </form>
      </div>

      <div className="col-12 col-sm-7 ">
        <h4>Results</h4>
        <hr />

        {
          (q === '')
            ? <div className='alert alert-info'>Search a hero...</div>
            : (heroesFiltered.length === 0)
            && <div className='alert alert-danger'> No results found for {q} . Try with another hero.</div>
        }

        <div className="row row-cols-2 row-cols-sm-1 row-cols-xl-2 g-2">

          {
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero} // asi pasamos el objeto entero con las propiedades
              />
            ))
          }
        </div>

      </div>

    </div>

  </div>;
};