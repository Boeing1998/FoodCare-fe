import axios from "axios";
import AxiosService from "./AxiosService";
import queryString from "query-string";
import _ from "lodash";

class CollectionService extends AxiosService {
  // Get list food
  createCollection = async (collection) => {
    try {
      const requestUrl = `https://fast-plateau-94181.herokuapp.com/coll/create`;
      const response = await axios.post(
        requestUrl,
        { ...collection },
        { headers: this.token() }
      );
      return response.data;
    } catch (error) {
      // Check if error is catched by BE
      if (error.response.data.message !== "") {
        return error.response.data;
      }
    }
  };

  getCollections = async () => {
    try {
      const requestUrl = `https://fast-plateau-94181.herokuapp.com/coll/show`;
      const response = await axios.get(
        requestUrl,
        { headers: this.token() }
      );
      return response.data;
    } catch (error) {
      // Check if error is catched by BE
      if (error.response.data.message !== "") {
        return error.response.data;
      }
    }
  }; 
}

export default CollectionService;
