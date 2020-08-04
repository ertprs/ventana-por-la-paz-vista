import axios from 'axios';

export async function Login(username, password) {
  const data = { username: username, password: password };
  return await axios
    .post(`${process.env.REACT_APP_APIURL}/auth/login/`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res)
    .catch((err) => console.log(`Error: ${err}`));
}

export async function CreateProfile(nombre, correo, contraseña, token) {
  const data = {
    nombre: nombre,
    edad: 18,
    correo: correo,
    contraseña: contraseña,
  };
  return await axios
    .post(
      `${process.env.REACT_APP_APIURL}/api/v1/tps/perfiles/`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    )
    .then((res) => res)
    .catch((err) => console.log(`Error: ${err}`));
}

export async function CreateShop(
  nombre,
  descripcion,
  indicativo,
  whatsapp,
  ubicacion,
  token
) {
  const data = {
    nombre: nombre,
    descripcion: descripcion,
    indicativo: indicativo,
    whatsapp: whatsapp,
    ubicacion: ubicacion,
  };

  return await axios
    .post(
      `${process.env.REACT_APP_APIURL}/api/v1/tps/tiendas/`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    )
    .then((res) => res)
    .catch((err) => console.log(`Error: ${err}`));
}

export async function LinkProfileShop(idProfile, idShop, token) {
  const data = {
    tienda: idShop,
  };

  return await axios
    .post(
      `${process.env.REACT_APP_APIURL}/api/v1/tps/perfiles/${idProfile}/`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    )
    .then((res) => res)
    .catch((err) => console.log(`Error: ${err}`));
}
