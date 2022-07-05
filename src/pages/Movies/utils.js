import {API_KEY, API_URL, SEARCH_URL, IMG_URL} from './constants';

export const generateApiUrl = path => `${API_URL}${path}?api_key=${API_KEY}`;
export const generateImageUrl = path=>`${IMG_URL}${path}`;
export const convertDate = date => new Date(date).toDateString().split(' ').slice(1).join(' ');
export const convertMinutes = mins => {
    var hours = Math.trunc(mins/60);
    var minutes = mins % 60;
    return hours +"h "+ minutes + "m";
}
export const generateSearchUrl = path =>`${SEARCH_URL}?api_key=${API_KEY}&query=${path}`;

