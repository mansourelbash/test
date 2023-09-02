import axios from "axios"
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='8994ee4ffd38086f88c4e9cefaba4207'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=8994ee4ffd38086f88c4e9cefaba4207';


const getAllData = axios.get(movieBaseUrl + '/trending/all/day?api_key='+api_key)

const getImagePath= (path) =>{
  return "https://image.tmdb.org/t/p/original/" + path
} 

const getMovieByGenreId = (id) =>{
  return axios.get(movieByGenreBaseURL +"&with_genres="+id)
}
export default {getAllData, getImagePath, getMovieByGenreId}