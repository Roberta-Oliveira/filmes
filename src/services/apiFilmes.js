import axios from 'axios';


const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application;json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjJhMzVlZGFmMDJhZTFlY2Y3OGJjMWRiMDEyYzM5MiIsInN1YiI6IjYxNDEzZGU5NWUxMjAwMDA4ZGEyY2YzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wNjZXidmElPgW4JOZ0Fh6LXv6BnPCamYMBlLysxQX-c'
    }

})

export default apiFilmes