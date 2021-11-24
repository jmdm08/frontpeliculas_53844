import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "../css/resultado.css"

export default function Resultado(props){

    function handleClick(evento){
        evento.stopPropagation();
        alert("Mostrar detalles de la película...")
    }

    return (
        <>
            <div className="resumen" onClick={handleClick} key={props.pelicula._id} >
                <div className="resumen-img">
                    <img src={props.pelicula.poster} alt="Póster"></img>
                </div>
                <div>
                    <h1>{props.pelicula.titulo}</h1>
                </div>
                <div>
                    <p>{props.pelicula.sinopsis}</p>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        {props.pelicula.rating}
                    </span>
                </div>
            </div>
        </>
    );
}