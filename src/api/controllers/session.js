const BASE_URL = 'http://localhost:3000';

const session = {
  login({email, password}) {
    return fetch(`${BASE_URL}/session?email=${email}&password=${password}`)
      .then(result => result.json());
  },

}

export default session;
