import axios from 'axios';

let apiURL = import.meta.env.VITE_API_URL;

console.log(apiURL);

const headers = {
  //   'Access-Control-Allow-Origin': true,
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  Accept: '*',
};

export default {
  handleGoogle: async body => {
    try {
      const options = {
        method: 'GET',
        url: `${apiURL}/api/v1/auth/google`,
        headers: headers,
      };

      const result = await axios.request(options);

      return result;
    } catch (err) {
      console.log(err);
    }
  },
  handleLogin: async body => {
    try {
      const options = {
        method: 'POST',
        url: `${apiURL}/api/v1/auth/register`,
        headers: headers,
        data: body,
      };

      const result = await axios.request(options);

      return result;
    } catch (err) {
      console.log(err);
    }
  },
};
