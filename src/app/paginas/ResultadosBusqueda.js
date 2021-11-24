import { useState, useEffect } from "react";
import Resultado from "../componentes/Resultado";
import peliculas from "../../peliculas50.json";
import '../css/resultados.css';

export default function ResultadosBusqueda(){
    const [busqueda, setBusqueda] = useState("");
    const [resultados, setResultados] = useState([]);

    useEffect(()=>{
        // TODO: CARGAR DESDE EL API.
        if(busqueda === ""){
            setResultados(peliculas);
        }
        else{
            if(busqueda.length >= 3){
                let resultadosBusqueda = peliculas.slice(0,busqueda.length);
                setResultados(resultadosBusqueda);
            }
            else{
                setResultados([]);
            }
        }
    }, [busqueda]);

    function handleChange(evento){
        evento.preventDefault();
        evento.stopPropagation();
        let tituloPelicula = evento.target.value; 
        setBusqueda(tituloPelicula);
    }

    return(
        <>
            <div className="busqueda">
                <fieldset>
                    <legend>Buscar Película</legend>
                    <div>
                        <input type="text" name="busqueda" id="busqueda" onChange={handleChange} />
                    </div>
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <legend>Listado Películas</legend>
                    <div>
                        <span>Mostrando resultados para: {busqueda}</span>
                    </div>
                    <div className="resultados">
                        {resultados && resultados.length > 0 && resultados.map((resultado,index) =>(
                            <>
                                <Resultado key={index.toString()} pelicula={resultado} />
                            </>
                        ))}
                    </div>
                </fieldset>
            </div>
        </>
    );
}