import axios from 'axios';

const API = axios.create({
    baseURL : `${process.env.REACT_APP_APIURL}`,
    timeout : 15000,
    responseType : 'json',
    headers : { 'Content-Type' : 'application/json' },
});

let TOKEN;

export async function Login( username, password ) {
    const data = { username : username, password : password };
    
    return await API.post('/auth/login/', JSON.stringify(data))
        .then(( res ) => {
            TOKEN = res.data['key'];
            API.defaults.headers.common['Authorization'] = `Token ${TOKEN}`;
            return res;
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

export async function Logout() {
    return await API.post('auth/logout/', {
        headers : {
            Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
        },
    }).then(( res ) => res
    ).catch(( err ) => {
        console.error(`Error: ${err}`);
    });
}

export async function CreateProfile( nombre, age, correo, contraseña ) {
    const data = {
        nombre,
        edad : parseInt(age),
        correo,
        contraseña,
    };
    return await API.post('/api/v1/tps/perfiles/', JSON.stringify(data), {
        headers : {
            Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
        },
    })
        .then(( res ) => res)
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

export async function CreateShop(
    nombre, descripcion, indicativo, whatsapp, ubicacion
) {
    const data = {
        nombre : nombre,
        descripcion : descripcion,
        indicativo : parseInt(indicativo),
        whatsapp : parseInt(whatsapp),
        ubicacion : ubicacion,
    };
    return await API.post('/api/v1/tps/tiendas/', JSON.stringify(data), {
        headers : {
            Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
        },
    })
        .then(( res ) => res)
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

// export async function LinkProfileShop( idProfile, idShop ) {
// const data = {
//     tienda : idShop,
// };
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
export async function LinkProfileShop( idProfile, idShop ) {
    const data = {
        tienda : idShop,
    };
    
    return await API.put(
        `/api/v1/tps/perfiles/${idProfile}/`,
        JSON.stringify(data),
        {
            headers : {
                Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
            },
        }
    )
        .then(( res ) => res)
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

// info de tienda [GET]
// /api/v1/tiendas/id
export async function ShopInfo( shopid ) {
    return await API.get('/api/v1/tps/tiendas/' + shopid)
        .then(( r ) => {
            return r;
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

// tiendas ordenadas por visitas [GET]
// /api/v1/tiendas
// ?param=visitas
export async function PopularShops() {
    return await API.get('/api/v1/tps/tiendas/', {
        params : {
            param : 'visitas',
        },
    })
        .then(( r ) => {
            return r;
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

// tiendas ordenadas por fecha de creacion [GET]
// /api/v1/tiendas
// ?param=recientes
export async function RecentShops() {
    return await API.get('/api/v1/tps/tiendas/', {
        params : {
            param : 'recientes',
        },
    })
        .then(( r ) => {
            return r;
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

// visitar tienda [GET]
// /api/v1/tiendas/id/visit
export async function VisitShop( shopid ) {
    return await API.get('/api/v1/tps/tiendas/' + shopid + '/visit')
        .then(( r ) => {
            return r;
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

// busqueda [GET]
// /ventanapaz/api/v1/tps/tiendas/filter_tienda/
// ?words=busqueda
export async function FetchShops( { page = 1 }={} ) {
    return await API.get('/api/v1/tps/tiendas/', {
        params : {
            page : page
        },
        headers : {
            Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
        },
    }).then(( r ) => {
        return r.data.results;
    }).catch(( err ) => {
        console.log(`Error: ${err}`);
    });
}

export async function SearchShops( { search, page = 1 }={} ) {
    return await API.get('/api/v1/tps/tiendas/filter_tienda', {
        params : {
            words : search,
            page : page
        },
        headers : {
            Authorization : `Token ${process.env.REACT_APP_TOKEN}`,
        },
    }).then(( r ) => {
        return r.data.results;
    }).catch(( err ) => {
        console.log(`Error: ${err}`);
    });
}

export async function SearchProducts( shopid, search ) {
    return await API.get('/api/v1/tps/tiendas/filter_by_product', {
        params : {
            words : search,
        },
    })
        .then(( r ) => {
            return r;
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}

// cambiar contraseña [POST]
// /ventanapaz/api/v1/tps/tiendas/filter_tienda/
// body: new_password1,new_password2
// header: usuario autenticado
export async function ChangePassword( new_password1, new_password2 ) {
    const data = { new_password1, new_password2 };
    return await API.post('/api/v1/tps/tiendas/filter_tienda', data)
        .then(( r ) => {
            return r;
        })
        .catch(( err ) => {
            console.log(`Error: ${err}`);
        });
}
