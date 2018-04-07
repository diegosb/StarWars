import * as types from './actions';
import { getMovies } from '../../services/swapi';

export function getAllMovies() {
    return dispatch => {
        getMovies()
            .then(response => {
                dispatch({ type: types.GET_MOVIES, payload: response.data.results })
            })
            .catch(err => {
                console.log(err);
            })
    }
}