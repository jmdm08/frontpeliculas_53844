import { useState, useEffect } from "react";
import * as PeliculasService from "../services/PeliculasService";
import FormActores from "../componentes/FormActores";
import FormGeneral from "../componentes/FormGeneral";
import ListarPeliculas from "../componentes/ListarPeliculas";

export default function AdministrarPeliculas(){
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [ano, setAno] = useState('');
    const [rating, setRating] = useState('');
    const [poster, setPoster] = useState('');
    const [clasificacion, setClasificacion] = useState('');
    const [tipo, setTipo] = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [actores, setActores] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [idiomas, setIdiomas] = useState([]);
    const [paises, setPaises] = useState([]);
    const [directores, setDirectores] = useState([]);
    const [nominaciones, setNominaciones ] = useState({cantidad:0, ganadas:0});

    useEffect(()=>{
        if(id){
            PeliculasService.servicioBusquedaId(id)
                .then(function(resultadoBusqueda){
                    const pelicula = resultadoBusqueda.data;
                    setTitulo(pelicula.titulo);
                    setAno(pelicula.ano);
                    setRating(pelicula.rating);
                    setPoster(pelicula.poster);
                    setClasificacion(pelicula.clasificacion);
                    setTipo(pelicula.tipo);
                    setSinopsis(pelicula.sinopsis);
                    setActores(pelicula.actores);
                    setGeneros(pelicula.generos);
                    setIdiomas(pelicula.idiomas);
                    setPaises(pelicula.paises);
                    setDirectores(pelicula.directores);
                    setNominaciones(pelicula.nominaciones);
                })
        }
    }, [id])

    function handleChange(evento){
        const {name, value} = evento.target;
        switch(name){
            case 'titulo':
                setTitulo(value);
            break;

            case 'ano':
                setAno(value);
            break;

            case 'rating':
                setRating(value);
            break;
            
            case 'poster':
                setPoster(value);
            break;

            case 'clasificacion':
                setClasificacion(value);
            break;

            case 'tipo':
                setTipo(value);
            break;

            case 'sinopsis':
                setSinopsis(value);
            break;
        }
    }

    function handleClick(evento){
        evento.preventDefault();
        const datosPelicula = {
            "titulo" : titulo,
            "ano" : ano,
            "rating" : rating,
            "clasificacion" : clasificacion,
            "poster" : poster,
            "tipo" : tipo,
            "sinopsis" : sinopsis,
            "actores" : actores,
            "generos" : generos,
            "paises" : paises,
            "idiomas" : idiomas,
            "directores" : directores,
            "nominaciones" : nominaciones 
        }

        if(id){
            PeliculasService.servicioActualizarPelicula(id, datosPelicula)
                .then(function(resultadoActualizar){
                    if(resultadoActualizar.datos.acknowledged){
                        alert("Película actualizada correctamente...");
                        setTipo('');
                        setTitulo('');
                        setAno('');
                        setRating('');
                        setClasificacion('');
                        setPoster('');
                        setSinopsis('');
                        setActores([]);
                        setNominaciones({cantidad:0, ganadas:0});
                        setPaises([]);
                        setIdiomas([]);
                        setGeneros([]);
                        setDirectores([]);
                        setId('');
                    }
                })
                .catch(function(error){
                    console.log(error)
                })
        }
        else{
            PeliculasService.servicioCrearPelicula(datosPelicula)
                .then(function(respuestaCrear){
                    if(respuestaCrear.resultado && typeof respuestaCrear.resultado === "string"){
                        alert("Película creada correctamente...");
                        setTipo('');
                        setTitulo('');
                        setAno('');
                        setRating('');
                        setClasificacion('');
                        setPoster('');
                        setSinopsis('');
                        setActores([]);
                        setNominaciones({cantidad:0, ganadas:0});
                        setPaises([]);
                        setIdiomas([]);
                        setGeneros([]);
                        setDirectores([]);
                    } 
                })
                .catch(function(error){
                    console.log(error);
                })
        }
    }

    function handleClickActores(evento){
        /*
            ADICIONAR ELEMENTOS A UN ARRAY.
            1. push.
            2. concat.
            3. Clase Set
            4. Operador Spread (...)
        */
       /*
            actores = [1,2,3]
            nuevosActores = [ actores, 4 ]
                            [ [1,2,3], 4 ]
            Operador Spread ...
                          = [...actores, 4]
                          = [1,2,3,4]
            */
        const { name, value } = evento.target;
        if(name === "btnEliminar"){
            setActores(actores => (
                actores.filter( (actor, idx) => idx !== parseInt(value) )
            ));
        }
        else{
            const nuevosActores = [...actores, {nombre:"", apellido:""}];
            setActores(nuevosActores);
        }
    }

    function handleChangeActores(evento){
        /*
            apellido-0.split("-")
             -> [apellido, 0]
             -> index = 0
             -> propiedad = apellido
        */
        const index = parseInt(evento.target.name.split("-").pop());
        const propiedad = evento.target.name.split("-").shift();
        const { value } = evento.target;
        setActores(actores => (
            actores.map((actor, idx) => {
                if(idx === index){
                    return {...actor, [propiedad] : value }
                }
                else{
                    return {...actor}
                }
            })
        ));
    }

    function handleChangeNominaciones(evento){
        const { name, value } = evento.target;
        setNominaciones(nominaciones => (
            {...nominaciones, [name] : value }
        ));
    }

    return(
        <>
            <div>
                <fieldset>
                    <legend>Administrar Películas</legend>
                    <form>
                        <fieldset>
                            <legend>Datos Película</legend>
                            <div>
                                <label htmlFor="titulo">Titulo: </label>
                                <input type="text" id="titulo" name="titulo" value={titulo} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="ano">Año: </label>
                                <input type="text" id="ano" name="ano" value={ano} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="rating">Rating: </label>
                                <input type="text" id="rating" name="rating" value={rating} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="clasificacion">Clasificación: </label>
                                <input type="text" id="clasificacion" name="clasificacion" value={clasificacion} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="poster">Póster: </label>
                                <input type="text" id="poster" name="poster" value={poster} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="tipo">Tipo: </label>
                                <input type="text" id="tipo" name="tipo" value={tipo} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="sinopsis">Sinopsis: </label>
                                <textarea id="sinopsis" name="sinopsis" value={sinopsis} onChange={handleChange} ></textarea>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Actores</legend>
                            <button type="button" onClick={handleClickActores}>Adicionar Actor</button>
                            {actores && actores.map((actor,idx)=>(
                                <FormActores
                                    key={idx}
                                    index={idx}
                                    actor={actor}
                                    onChange={handleChangeActores}
                                    onClick={handleClickActores}
                                />
                            ))}
                        </fieldset>
                        <FormGeneral
                            titulo="Géneros"
                            id="genero"
                            datos={generos}
                            actualizarDatos={setGeneros}
                        />
                        <FormGeneral
                            titulo="Idiomas"
                            id="idiomas"
                            datos={idiomas}
                            actualizarDatos={setIdiomas}
                        />
                        <FormGeneral
                            titulo="Países"
                            id="paises"
                            datos={paises}
                            actualizarDatos={setPaises}
                        />
                        <FormGeneral
                            titulo="Directores"
                            id="directores"
                            datos={directores}
                            actualizarDatos={setDirectores}
                        />
                        <fieldset>
                            <legend>Nominaciones</legend>
                            <div>
                                <label htmlFor="cantidad">Cantidad: </label>
                                <input type="text" id="cantidad" name="cantidad" value={nominaciones.cantidad} onChange={handleChangeNominaciones} />
                            </div>
                            <div>
                                <label htmlFor="ganadas">Ganadas: </label>
                                <input type="text" id="ganadas" name="ganadas" value={nominaciones.ganadas} onChange={handleChangeNominaciones} />
                            </div>
                        </fieldset>
                        <div>
                            <button type="button" onClick={handleClick}>Guardar</button>
                        </div>
                    </form>
                    <ListarPeliculas
                        id={setId}
                    />
                </fieldset>
            </div>
        </>
    )
}