import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Movie.css';

const Movie = props => {
  const { movie } = props;
  return (
    <Link to={`/${movie.episode_id}`} className="Movie">
      <img className="Movie__poster" src={`./img/${movie.episode_id}.jpg`} alt="Movie poster" />
      <h4 className="Movie__title">{movie.title} ({movie.release_date.slice(0, 4)})</h4>
    </Link>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
