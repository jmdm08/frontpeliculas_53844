import { useParams } from "react-router";
import { useEffect, useState } from "react";
import DetalleActores from "../componentes/DetalleActores";
import DetalleGeneral from "../componentes/DetalleGeneral";
import * as PeliculasService from "../services/PeliculasService"
import "../css/detallepagina.css";
import DetalleNominaciones from "../componentes/DetalleNominaciones";

export default function DetallePelicula(){
    const [pelicula, setPelicula] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        PeliculasService.servicioBusquedaId(id)
            .then(function(datos){
                setPelicula(datos.data);
            })
            .catch(function(error){
                console.log(error);
            })
    }, [id]);

    /*
        useParams() -> Devuelvo todos los parámetros de la URL
            -> http://localhost:3500/detalle/:id/:nombre/:apellido
                {
                    id : xxx,
                    nombre : xxx,
                    apellido : xxx
                }
        
        DESESTRUCTURACIÓN DE UN OBJETO.
            -> const { id, apellido } = useParams();
            
        ANALIZAR INTERFAZ.
            -> 1. ID Película -> Parámetros de la URL.
            -> 2. ESTADOS
                -> ** pelicula.
            -> 3. EFECTOS
                -> Montaje.
            -> 4. COMPONENTES
                -> Actores. -> props -> Array de Objetos
                -> Género/Países/Idiomas, etc. -> props: Array
    */
    return(
        <>
            <div className="dv-main_detalle">
                <fieldset>
                    <legend>Detalle Película</legend>
                    <div className="dv-titulo_detalle">
                        <h1>{pelicula.titulo}</h1>
                        <div className="dv-datos_detalle">
                            <div className="dv-poster_detalle">
                                <img alt="Póster" src={pelicula.poster}></img>
                            </div>
                            <div>
                                <fieldset>
                                    <legend>Año</legend>
                                    <span>{pelicula.ano}</span>
                                </fieldset>
                                <fieldset>
                                    <legend>Rating</legend>
                                    <span>{pelicula.rating}</span>
                                </fieldset>
                                <fieldset>
                                    <legend>Clasificación</legend>
                                    <legend>{pelicula.clasificacion}</legend>
                                </fieldset>
                            </div>
                            <div>
                                <p>
                                    {pelicula.sinopsis}
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr></hr>
                    <span>.....</span>
                    <hr></hr>

                    <fieldset>
                        <legend>Detalle</legend>
                        <DetalleActores actores={pelicula.actores} />
                        <div className="dv-general_detalle">
                            <DetalleGeneral titulo="Géneros" datos={pelicula.generos} />
                            <DetalleGeneral titulo="Idiomas" datos={pelicula.idiomas} />
                            <DetalleGeneral titulo="Países" datos={pelicula.paises} />
                            <DetalleNominaciones titulo="Nominaciones" datos={pelicula.nominaciones} />
                        </div>
                        <DetalleGeneral titulo="Directores" datos={pelicula.directores} />
                    </fieldset>
                </fieldset>

                <div className="dv-button_detalle">
                    <button type="button">Regresar</button>
                </div>
            </div>
        </>
    ); 
}