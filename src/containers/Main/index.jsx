import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllMovies } from '../../store/Movies/actionCreators';
import SearchBar from '../../components/SearchBar';
import ListMovies from '../../components/ListMovies';

import './Main.css';

class Main extends Component {
    state = {
        searchMovie: '',
    }

    componentDidMount() {
        if (!this.props.movies.length) {
            this.props.getAllMovies();
        }
    }

    handleSearchMovies = e => {
        this.setState({ searchMovie: e.target.value });
    }

    render() {
        const { searchMovie } = this.state;
        const { movies } = this.props;

        return (
            <section className="Main">
                <h1 className="Main__title">Star Wars Movies</h1>
                <section className="Main__content">
                    <SearchBar value={searchMovie} onChange={this.handleSearchMovies} />
                    {movies.length ?
                        <ListMovies movies={movies.filter(movie => movie.title.match(new RegExp(searchMovie, 'i')))} />
                        :
                        <h2 className="loading">Carregando Filmes....</h2>
                    }
                </section>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
})

const mapDispatchToProps = dispatch => bindActionCreators({ getAllMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);