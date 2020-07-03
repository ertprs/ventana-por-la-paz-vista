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

export async function SignUp(nombre, correo, contraseña) {
  await axios
    .post(`${process.env.REACT_APP_APIURL}/api/v1/tps/perfiles/`, {
      nombre: JSON.stringify(nombre),
      edad: 18,
      correo: JSON.stringify(correo),
      contraseña: JSON.stringify(contraseña),
    })
    .then((res) => {
      console.log(res);
    });
}
