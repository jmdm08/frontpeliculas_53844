import { useState, useEffect } from "react";
import * as PeliculasService from "../services/PeliculasService";

export default function ListarPeliculas(){
    const [peliculas, setPeliculas] = useState([]);

    useEffect(()=>{
        PeliculasService.servicioBusquedaPeliculas()
            .then(function(resultadoBusqueda){
                setPeliculas(resultadoBusqueda.data);
            })
    },[])

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Película</th>
                        <th>Año</th>
                        <th>Rating</th>
                        <th>Clasificación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas && peliculas.map(pelicula => (
                        <tr key={pelicula._id}>
                            <td>{pelicula.titulo}</td>
                            <td>{pelicula.ano}</td>
                            <td>{pelicula.rating}</td>
                            <td>{pelicula.clasificacion}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}