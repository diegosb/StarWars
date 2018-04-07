import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../../store/Movies/actionCreators';

import './MovieDetails.css';

class MovieDetails extends Component {
  componentDidMount() {
    if (!this.props.movies.length) {
      this.props.getAllMovies();
    }
  }

  render() {
    const movie = this.props.movies.find(movie => +movie.episode_id === +this.props.match.params.id);
    if (movie) {
      return (
        <section className="MovieDetails">
          <Link to="/" className="MovieDetails__return"><h3>◀ Retornar</h3></Link>
          <img className="MovieDetails__poster" src={`./img/${movie.episode_id}.jpg`} alt="Movie poster" />
          <h1 className="MovieDetails__title">{movie.title} ({movie.release_date.slice(0, 4)})</h1>
          <div className="MovieDetails__content">
            <p>Director: {movie.director}</p>
            <p>Producers: {movie.producer}</p>
            <p>{movie.opening_crawl}</p>
          </div>
        </section>

      )
    }
    return (
      <h1 className="loading">
        Carregando...
      </h1>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
})

const mapDispatchToProps = dispatch => bindActionCreators({ getAllMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
