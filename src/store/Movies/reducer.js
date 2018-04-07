import * as types from './actions';

export default function(state = [], action) {
    if(action.type === types.GET_MOVIES) {
        return [...action.payload];
    }
    return state;
}