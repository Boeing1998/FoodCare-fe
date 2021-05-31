import axios from "axios";
import AxiosService from "./AxiosService";
import queryString from "query-string";
import _ from "lodash";

class FoodService extends AxiosService {
  // Get list food
  getFoods = async (filter) => {
    try {
      const paramsString = queryString.stringify(filter);
      const requestUrl = `https://fast-plateau-94181.herokuapp.com/food?${paramsString}`;
      const response = await axios.get(requestUrl);
      return response.data;
    } catch (error) {
      // Check if error is catched by BE
      if (error.response.data.message !== "") {
        return error.response.data;
      }
    }
  };
}

export default FoodService;
