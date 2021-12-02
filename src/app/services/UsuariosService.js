import { URL_API } from "../config/config";

export function servicioIniciarSesion(usuario, clave){

    const path = "/usuarios/iniciarSesion?usuario=" + usuario + "&clave=" + clave;

    const config = {
        method : "GET",
        mode : "cors"
    };

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