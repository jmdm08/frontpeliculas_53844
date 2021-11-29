/*
    titulo="Géneros",
    datos = [
        "Acción",
        "Drama"
    ]
*/

export default function DetalleNominaciones(props){

    return(
        <>
            <fieldset>
                <legend>{props.titulo}</legend>
                <ul>
                    {props.datos &&
                        <>
                            <li>Cantidad: {props.datos.cantidad}</li>
                            <li>Ganadas: {props.datos.ganadas}</li>
                        </>
                    }
                </ul>
            </fieldset>
        </>
    );

}