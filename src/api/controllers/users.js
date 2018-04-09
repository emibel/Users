const BASE_URL = 'http://localhost:3000';

const HEADERS = {
  'Content-Type': 'application/json',
};

const users = {
  /**
   * @param  {} limit=10
   */
  fetchUsers(limit = 10) {
    return fetch(`${BASE_URL}/users`)
      .then(result => result.json());
  },

  fetchSaveUser(user) {
    return fetch(`${BASE_URL}/users/`,
      {
        body: JSON.stringify({...user}),
        method: 'POST',
        headers: HEADERS,
      }
    )
  }
}


export default users;
