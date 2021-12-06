import { useState, useEffect } from "react";
import * as PeliculasService from "../services/PeliculasService";

export default function ListarPeliculas(props){
    const [peliculas, setPeliculas] = useState([]);

    useEffect(()=>{
        PeliculasService.servicioBusquedaPeliculas()
            .then(function(resultadoBusqueda){
                setPeliculas(resultadoBusqueda.data);
            })
    },[]);

    function handleClick(evento){
        const { name, value } = evento.target;
        const idPelicula = value;
        switch(name){
            case 'btnEditar':
                props.id(idPelicula);
            break;

            case 'btnEliminar':
                PeliculasService.servicioEliminarPelicula(idPelicula)
                    .then(function(resultadoEliminar){
                        if(resultadoEliminar.datos.acknowledged){
                            /*
                                setEstados
                                    -> VALOR CONCRETO
                                    -> UNA FUNCIÓN.
                            */
                            setPeliculas(peliculas => (
                                peliculas.filter(pelicula => pelicula._id !== idPelicula)
                            ));
                        }
                        else{
                            alert("Error al eliminar película")
                        }
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            break;
        }
    }

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
                            <td>
                                <button type="button" name="btnEditar" onClick={handleClick} value={pelicula._id}>Editar</button>
                                <button type="button" name="btnEliminar" onClick={handleClick} value={pelicula._id} >Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}