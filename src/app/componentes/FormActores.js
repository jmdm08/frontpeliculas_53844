export default function FormActores(props){
    return(
        <>
            <div>
                <div>
                    <label htmlFor={"nombre-"+props.index}>Nombre: </label>
                    <input type="text" id={"nombre-"+props.index} name={"nombre-"+props.index} value={props.actor.nombre} onChange={props.onChange} />
                </div>
                <div>
                    <label htmlFor={"apellido-"+props.index}>Apellido: </label>
                    <input type="text" id={"apellido-"+props.index} name={"apellido-"+props.index} value={props.actor.apellido} onChange={props.onChange} />
                </div>
                <div>
                    <button type="button" name="btnEliminar" onClick={props.onClick} value={props.index}>Eliminar</button>
                </div>
            </div>
        </>
    )
}