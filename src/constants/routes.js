
const API = process.env.REACT_APP_DEFAULT_ROUTE

const USER_ROUTES = {
    LOGIN: `${API}/user/login`,
    SIGNUP : `${API}/user/signup`,
    PROFILE : `${API}/user/profile`,
    EDIT : `${API}/user/edit`,
    CHANGEPASSWORD : `${API}/user/password`,
    FOODSFORADMIN :`${API}/food/admin/show`,
    FOODS :`${API}/food/`,
    CREATEFOODS :`${API}/food/create`,
    DELETEFOODS :`${API}/food/delete/`,
    EDITFOOD :`${API}/food/admin/edit`,
    LISTUSER : `${API}/user/admin/show`,
    BANUSER : `${API}/user`
}

export { API, USER_ROUTES }