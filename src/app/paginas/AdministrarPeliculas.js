import ListarPeliculas from "../componentes/ListarPeliculas"

export default function AdministrarPeliculas(){
    return(
        <>
            <div>
                <fieldset>
                    <legend>Administrar Películas</legend>
                    <ListarPeliculas />
                </fieldset>
            </div>
        </>
    )
}