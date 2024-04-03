import axios from 'axios';

export const api = axios.create({
    baseURL: "https://geo.ipify.org/api/v2/country,city"
})

export const apiKey = "at_nK83LNTdk6hnL8QpK6vXnZWXqHdJ3";

//at_nK83LNTdk6hnL8QpK6vXnZWXqHdJ3

//192.212.174.101

//at_nK83LNTdk6hnL8QpK6vXnZWXqHdJ3&ipAddress

//add latitude e longitude ao mapa
// btn de zoom nao funcionando