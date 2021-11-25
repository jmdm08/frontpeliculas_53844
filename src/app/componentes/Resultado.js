import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "../css/resultado.css"

export default function Resultado(props){
    let history = useHistory();

    function handleClick(evento){
        history.push("/detalle/" + props.pelicula._id);
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