import "../css/resultado.css"

export default function Resultado(){

    function handleClick(evento){
        evento.stopPropagation();
        alert("Mostrar detalles de la película...")
    }

    return (
        <>
            <div className="resumen" onClick={handleClick} >
                <div className="resumen-img">
                    <img src="https://i2.wp.com/hipertextual.com/wp-content/uploads/2016/10/avatar-poster-01.jpg?resize=600%2C886&ssl=1"></img>
                </div>
                <div>
                    <h1>AVATAR</h1>
                </div>
                <div>
                    <p>RESUMEN: </p>
                </div>
                <div>
                    <span>
                        Rating:
                        <i></i>
                    </span>
                </div>
            </div>
        </>
    );
}