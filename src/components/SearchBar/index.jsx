import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="SearchBar">
            <input type="text" className="SearchBar__input" value={props.value} onChange={props.onChange} placeholder="Buscar" />
        </div>
    );
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBar;