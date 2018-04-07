import axios from 'axios';
const url = 'https://swapi.co/api';

export const getMovies = () => {
    return axios.get(`${url}/films`);
}

export const getPeople = peopleId => {
    return axios.get(`${url}/people/${peopleId}`);
}

export const getPlanet = planetId => {
    return axios.get(`${url}/planets/${planetId}`);
}

export const getSpecies = specieId => {
    return axios.get(`${url}/species/${specieId}`);
}

export const getStarship = starshipId => {
    return axios.get(`${url}/starships/${starshipId}`);
}

export const getVehicle = vehicleId => {
    return axios.get(`${url}/vehicles/${vehicleId}`);
}