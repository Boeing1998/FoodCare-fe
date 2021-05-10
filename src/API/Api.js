import axios from 'axios'

export default axios.create({
    baseURL : `https://fast-plateau-94181.herokuapp.com/user/`
});