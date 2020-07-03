import axios from 'axios';

export async function Login(username, password) {
  await axios
    .get(`${process.env.REACT_APP_APIURL}/auth/login/`, {
      params: {
        username: JSON.stringify(username),
        password: JSON.stringify(password),
      },
    })
    .then((res) => {
      console.log(res);
    });
}
