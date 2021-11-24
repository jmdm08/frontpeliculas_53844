import { useState } from "react";
import Resultado from "../componentes/Resultado";
import '../css/resultados.css';

export default function ResultadosBusqueda(){
    const [busqueda, setBusqueda] = useState("");
    const [resultados, setResultados] = useState([]);

    function handleChange(evento){
        evento.preventDefault();
        evento.stopPropagation();
        let tituloPelicula = evento.target.value; 
        if(tituloPelicula.length >= 3){
            // TODO: CONECTAR API -> obtenerPeliculasTitulo
            let resultadosBuquedas = new Array(tituloPelicula.length).fill(0);
            setResultados(resultadosBuquedas);
        }
        else{
            setResultados([]);
        }
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
                        {resultados && resultados.length > 0 && resultados.map(resultado =>(
                            <>
                                <Resultado />
                            </>
                        ))}
                    </div>
                </fieldset>
            </div>
        </>
    );
}