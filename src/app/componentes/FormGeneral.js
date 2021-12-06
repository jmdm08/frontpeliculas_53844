import { useState } from "react";

export default function FormGeneral(props){
    const [etiqueta, setEtiqueta] = useState('');

    function handleChange(evento){
        const {value} = evento.target;
        setEtiqueta(value);
    }

    function handleClick(evento){
        // setGeneros()
        evento.preventDefault();
        const { name, value } = evento.target;
        if(name === "btnAdicionar"){
            props.actualizarDatos(datos => (
                [...datos, etiqueta]
            ));
            setEtiqueta('');
        }
        else{
            props.actualizarDatos(datos => (
                datos.filter( (dato, idx) => idx !== parseInt(value) )
            ));
        }
        
    }

    return(
        <>
            <fieldset>
                <legend>{props.titulo}</legend>
                <div>
                    <label htmlFor={props.id}>{props.titulo} : </label>
                    <input type="text" id={props.id} name={props.id} value={etiqueta} onChange={handleChange} />
                    <button type="button" onClick={handleClick} name="btnAdicionar" >Adicionar {props.titulo}</button>
                </div>
                <div>
                    {props.datos && props.datos.map((dato,idx) => (
                        <button key={idx} type="button" value={idx} name="btnEliminar" onClick={handleClick}>{dato}</button>
                    ))}
                </div>

            </fieldset>
        </>
    )

}