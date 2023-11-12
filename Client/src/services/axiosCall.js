import axios from "axios";

function customAxios(){
    return axios.create({
        baseURL: 'http://localhost:3000/api',
        timeout: 5000
    })
}

export default customAxios;