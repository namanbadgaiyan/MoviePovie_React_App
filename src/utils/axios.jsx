import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjljMGM3ZDRkYThkNmQ4MGU4N2UwMWFjNTRjMzRmNiIsIm5iZiI6MTcyMjAwOTE0Ny4zOTk5ODYsInN1YiI6IjY2YTNjNGIxYzZhYTQ1MTNlYWFmYWRmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5pmM45ot6OU9UjVqmSum6_-v7x2m-FOfwDMnWTcHmlw'
    }
})

export default instance