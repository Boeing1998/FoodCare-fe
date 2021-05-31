import axios from "axios";
import AxiosService from "./AxiosService";
import queryString from "query-string";
import _ from "lodash";

class AuthService extends AxiosService {
  // Get list food
  register = async (email, password) => {
    try {
      const requestUrl = `https://fast-plateau-94181.herokuapp.com/user/signup`;
      const response = await axios.post(requestUrl, {email, password});
      return response.data; 
    } catch (error) {
      // Check if error is catched by BE
      if (error.response.data.message !== "") {
        return error.response.data;
      }
    }
  };

  login = async (email, password) => {
    try {
      const requestUrl = `https://fast-plateau-94181.herokuapp.com/user/login`;
      const response = await axios.post(requestUrl, {email, password});
      console.log(response);
      return response.data; 
    } catch (error) {
      // Check if error is catched by BE
      if (error.response.data.message !== "") {
        return error.response.data;
      }
    }
  };
}

export default AuthService;
