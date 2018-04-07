import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie';

import './ListMovies.css';

const ListMovies = props => {
  if (props.movies.length) {
    return (
      <ul className="movies__list">
        {
          props.movies.map(movie => <li className="movies__item" key={movie.episode_id}><Movie movie={movie} /></li>)
        }
      </ul>
    )
  }
  return (
    <div className="movies__no-results">
      <h2>Sem Resultados Encontrados</h2>
    </div>
  );
};

ListMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListMovies;
