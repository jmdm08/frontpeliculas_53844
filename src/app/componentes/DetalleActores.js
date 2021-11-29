/*
    [
        {nombre: "xxx", apellido: "yyy"},
        {nombre: "xxx", apellido: "yyy"},
        {nombre: "xxx", apellido: "yyy"}
    ]
*/

export default function DetalleActores(props){
    return (
        <>
            <fieldset>
                <legend>Actores</legend>
                <ul>
                    {props.actores && props.actores.map((actor,key) => (
                        <li key={key}>{actor.nombre} {actor.apellido}</li>
                    ))}
                </ul>
            </fieldset>
        </>
    )
}