import axios from "axios";
import { apiURL } from "../app/config";

/**
 * Auth Login
 * @param username
 * @param password 
 * @returns auth data or error
 */
export const authLogin = async ({username, password}) => {
    return await axios
      .post(apiURL + 'api/user/login', {
        username: username,
        password: password,
      },{
				headers: {'x-api-key': 'B1740A5A0C55839D3EC863C70D880E89', 'content-type': 'application/x-www-form-urlencoded'},
			  })
      .then((response) => {
        return response.data;
      }).catch((err) => {
        return err
      });
  }