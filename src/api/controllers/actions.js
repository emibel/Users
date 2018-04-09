const BASE_URL = 'http://localhost:3000';

const HEADERS = {
  'Content-Type': 'application/json',
};

const action = {
  save(obj) {
    console.log(obj.msg);
    obj.createdAt = new Date();

    return fetch(`${BASE_URL}/actions/`,
      {
        body: JSON.stringify({...obj}),
        method: 'POST',
        headers: HEADERS,
      }
    )
  }
}


export default action;
