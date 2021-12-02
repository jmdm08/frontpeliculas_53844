import { useHistory } from 'react-router';
import '../css/header.css';

export default function Header(props){
    let history = useHistory();

    function handleClick(evento){
        evento.preventDefault();
        let {name} = evento.target;

        if(name === "btnIniciar"){
            history.push("/login");
        }
        else{
            localStorage.removeItem('auth');
            props.autenticado(null);
            history.push("/");
        }
    }

    return(
        <>
            <header className="header">
                {props.usuario ? 
                    (
                        <button type="button" onClick={handleClick} name="btnCerrar">Cerrar Sesión</button>
                    )
                    :
                    (
                        <button type="button" onClick={handleClick} name="btnIniciar">Iniciar Sesión</button>
                    )
                }
            </header>
            {props.children}
        </>
    )
}