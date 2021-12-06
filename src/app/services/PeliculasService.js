import { URL_API, getToken } from "../config/config";

export function servicioBusquedaTitulo(titulo){
    /* 
        API FETCH.
            REALIZAR CONEXIONES EXTERNAS USANDO AJAX.

                -> URL / PATH.
                -> CONFIGURACIÓN
                    -> MÉTODO HTTP.
                    -> HEADERS.
                    -> MODE -> CORS.
                    -> POST -> BODY.
    */

    const path = "/peliculas/obtenerPeliculasPorTitulo/" + titulo;

    const config = {
        method : "GET",
        mode: "cors"
    }
    
    // FETCH -> RETORNA UNA PROMESA. 
    return fetch(URL_API + path, config)
        .then(function(respuesta){
            if(respuesta.status === 200){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
}

export function servicioBusquedaId(id){
    const path = "/peliculas/obtenerPelicula/" + id;

    const config = {
        method : "GET",
        mode : "cors"
    }

    return fetch(URL_API + path, config)
        .then(function(respuesta){
            if(respuesta.ok){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        })
}

export function servicioBusquedaPeliculas(){

    const path = "/peliculas/obtenerPeliculas";

    const config = {
        method : "GET",
        mode : "cors",
        headers:{
            'authorization' : "Bearer " + getToken()
        }
    }

    return fetch(URL_API + path, config)
        .then(function(respuesta){
            if(respuesta.ok){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
}

export function servicioCrearPelicula(pelicula){

    const path = "/peliculas/crearPelicula";

    const config = {
        method : "POST",
        mode : "cors",
        headers : {
            "authorization" : "Bearer " + getToken(),
            "content-type" : "application/json" // TIPOS MIME.
        },
        body : JSON.stringify(pelicula)
    }

    return fetch(URL_API + path, config)
        .then(function(respuesta){
            if(respuesta.ok){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
}

export function servicioActualizarPelicula(id, pelicula){

    const path = "/peliculas/actualizarPelicula/" + id;

    const config = {
        method : "PUT",
        mode : "cors",
        headers : {
            "authorization" : "Bearer " + getToken(),
            "content-type" : "application/json"
        },
        body : JSON.stringify(pelicula)
    }

    return fetch(URL_API + path, config)
        .then(function(respuesta){
            if(respuesta.ok){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
}

export function servicioEliminarPelicula(id){
    
    const path= "/peliculas/eliminarPelicula?id=" + id;

    const config = {
        method : "DELETE",
        headers : {
            "authorization" : "Bearer " + getToken()
        },
        mode : "cors"
    }

    return fetch(URL_API + path, config)
        .then(function(respuesta){
            if(respuesta.ok){
                return respuesta.json();
            }
            else{
                return Promise.reject(respuesta.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
}