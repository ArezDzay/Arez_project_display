import axios from 'axios'

const Axios = baseURL => {
    const instance = axios.create({
        baseURL: baseURL || 'https://vue-course-api.hexschool.io',
        timeout: 5000,
    });
    return instance
}

export default Axios()