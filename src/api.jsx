import axios from 'axios';

const apiURL = import.meta.env.API_URL;

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
        url: `https://login-passport-api.herokuapp.com/api/v1/auth/google`,
        headers: headers,
      };

      const result = await axios.request(options);

      return result;
    } catch (err) {
      console.log(err);
    }
  },
};
