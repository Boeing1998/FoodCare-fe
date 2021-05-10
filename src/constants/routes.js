
const API = process.env.REACT_APP_DEFAULT_ROUTE

const USER_ROUTES = {
    LOGIN: `${API}/user/login`,
    SIGNUP : `${API}/user/signup`,
    PROFILE : `${API}/user/profile`,
    EDIT : `${API}/user/edit`
}

export { API, USER_ROUTES }