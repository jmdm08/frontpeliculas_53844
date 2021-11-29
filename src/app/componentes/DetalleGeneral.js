/*
    titulo="Géneros",
    datos = [
        "Acción",
        "Drama"
    ]
*/

export default function DetalleGeneral(props){

    return(
        <>
            <fieldset>
                <legend>{props.titulo}</legend>
                <ul>
                    {props.datos && props.datos.map((dato, key) => (
                        <li key={key}>{dato}</li>
                    ))}
                </ul>
            </fieldset>
        </>
    );

}