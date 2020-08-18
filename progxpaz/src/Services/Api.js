import axios from 'axios';

const API = axios.create({
    baseURL : `${process.env.REACT_APP_APIURL}`,
    timeout : 5000,
    responseType : 'json'
})

// export async function Login( username, password ) {
//     const data = { username : username, password : password };
//     return await axios
//         .post(`${process.env.REACT_APP_APIURL}/auth/login/`, JSON.stringify(data), {
//             headers : {
//                 'Content-Type' : 'application/json',
//             },
//         })
//         .then(( res ) => res)
//         .catch(( err ) => console.log(`Error: ${err}`));
// }

export function Login( username, password ) {
    const data = { username, password };
    return API.post('/auth/login', data)
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// export async function CreateProfile( nombre, correo, contraseña ) {
//     const data = {
//         nombre : nombre,
//         edad : 18,
//         correo : correo,
//         contraseña : contraseña,
//     };
//     return await axios
//         .post(
//             `${process.env.REACT_APP_APIURL}/api/v1/tps/perfiles/`,
//             JSON.stringify(data),
//             {
//                 headers : {
//                     'Content-Type' : 'application/json',
//                     Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
//                 },
//             }
//         )
//         .then(( res ) => res)
//         .catch(( err ) => console.log(`Error: ${err}`));
// }

export function CreateProfile( nombre, correo, contraseña ) {
    const data = {
        nombre, correo, contraseña, edad : 18
    }
    return API.post('/api/v1/tps/perfiles/', data, {
        headers : {
            Authorization : `Token ${process.env.REACT_APP_TOKEN}`
        }
    })
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// export async function CreateShop(
//     nombre,
//     descripcion,
//     indicativo,
//     whatsapp,
//     ubicacion
// ) {
//     const data = {
//         nombre : nombre,
//         descripcion : descripcion,
//         indicativo : indicativo,
//         whatsapp : whatsapp,
//         ubicacion : ubicacion,
//     };
//
//     return await axios
//         .post(
//             `${process.env.REACT_APP_APIURL}/api/v1/tps/tiendas/`,
//             JSON.stringify(data),
//             {
//                 headers : {
//                     'Content-Type' : 'application/json',
//                     Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
//                 },
//             }
//         )
//         .then(( res ) => res)
//         .catch(( err ) => console.log(`Error: ${err}`));
// }

export function CreateShop( nombre, descripcion, indicativo, whatsapp, ubicacion ) {
    const data = { nombre, descripcion, indicativo : parseInt(indicativo), whatsapp : parseInt(whatsapp), ubicacion };
    return API.post('/api/v1/tps/tiendas/', data, {
        headers : {
            Authorization : `Token ${process.env.REACT_APP_TOKEN}`
        }
    })
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// export async function LinkProfileShop( idProfile, idShop ) {
//     const data = {
//         tienda : idShop,
//     };
//
//     return await axios
//         .post(
//             `${process.env.REACT_APP_APIURL}/api/v1/tps/perfiles/${idProfile}/`,
//             JSON.stringify(data),
//             {
//                 headers : {
//                     'Content-Type' : 'application/json',
//                     Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
//                 },
//             }
//         )
//         .then(( res ) => res)
//         .catch(( err ) => console.log(`Error: ${err}`));
// }

export function LinkProfileShop( idProfile, tienda ) {
    return API.post('/api/v1/tps/perfiles/' + idProfile, { tienda }, {
        headers : {
            Authorization : `Token ${process.env.REACT_APP_TOKEN}`
        }
    })
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// info de tienda [GET]
// /api/v1/tiendas/id
export function ShopInfo( shopid ) {
    return API.get('/api/v1/tps/tiendas/' + shopid,)
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// tiendas ordenadas por visitas [GET]
// /api/v1/tiendas
// ?param=visitas
export function PopularShops() {
    return API.get('/api/v1/tps/tiendas/', {
        params : {
            param : 'visitas'
        }
    })
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// tiendas ordenadas por fecha de creacion [GET]
// /api/v1/tiendas
// ?param=recientes
export function RecentShops() {
    return API.get('/api/v1/tps/tiendas/', {
        params : {
            param : 'recientes'
        }
    })
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// visitar tienda [GET]
// /api/v1/tiendas/id/visit
export function VisitShop( shopid ) {
    return API.get('/api/v1/tps/tiendas/' + shopid + '/visit')
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// busqueda [GET]
// /ventanapaz/api/v1/tps/tiendas/filter_tienda/
// ?words=busqueda
export function SearchShops( shopid, search ) {
    return API.get('/api/v1/tps/tiendas/filter_tienda', {
        params : {
            words : search
        }
    })
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

// cambiar contraseña [POST]
// /ventanapaz/api/v1/tps/tiendas/filter_tienda/
// body: new_password1,new_password2
// header: usuario autenticado
export function ChangePassword( new_password1, new_password2 ) {
    const data = { new_password1, new_password2 }
    return API.post('/api/v1/tps/tiendas/filter_tienda', data)
        .then(r => {
            return r
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`)
        });
}

