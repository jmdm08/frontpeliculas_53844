import { URL_API } from "../config/config";

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