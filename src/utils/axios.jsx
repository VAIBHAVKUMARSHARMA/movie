import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWM0YTgyM2MyZjJlYWEzOGNlZGNkN2Y3NjZhNWUyYSIsIm5iZiI6MTczODA2NDc2MS43MTI5OTk4LCJzdWIiOiI2Nzk4YzM3OWRmNGIwMTkxY2UyYjJiMjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upAczkjO8xiEACjKghJ8vUOmH05kLqKf0IeiSlZfkRQ',
    },
});

export default instance;
