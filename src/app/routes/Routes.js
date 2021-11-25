import { Switch, Route } from "react-router";
import DetallePelicula from "../paginas/DetallePelicula";
import ResultadosBusqueda from "../paginas/ResultadosBusqueda";

export function Routes(){

    return(
        <Switch>
            <Route exact path="/" component={ResultadosBusqueda} />
            <Route path="/detalle/:id" component={DetallePelicula} />
        </Switch>
    );
}