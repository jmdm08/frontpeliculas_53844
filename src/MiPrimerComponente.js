export default function MiPrimerComponente(props){

    /* 
        props.nombres -> Array
            forEach -> Sólo recorre el array elemento a elemento.
            map -> Recorre el array y devuelve una operación con ese elemento.
    */

    return (
        <>
            {props.nombres.map(persona => (
                <>
                    <h3>Mi primer componente Funcional</h3>
                    <span>{persona.nombre} {persona.apellido}</span>
                </>
            ))}  
        </>
    );
}