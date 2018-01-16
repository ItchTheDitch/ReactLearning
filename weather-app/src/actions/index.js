import axios from 'axios';

const API_KEY = '2b6349756b7b82b9482ce551e87b8e45';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const country = "id"
    const url = `${ROOT_URL}&q=${city}, ${country}`;
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}