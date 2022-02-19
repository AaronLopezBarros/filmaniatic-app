import axios from "axios";

const authService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`
})

const signup = (credentials) => {
    return authService.post('/signup', credentials)
}

export default signup