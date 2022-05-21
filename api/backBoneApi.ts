import axios from 'axios';

const backBoneApi = axios.create({
    baseURL: 'https://bkbnchallenge.herokuapp.com'
});

export default backBoneApi;