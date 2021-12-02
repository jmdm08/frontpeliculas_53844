import { useState } from "react";
import { Switch, Route, Redirect } from "react-router";
import DetallePelicula from "../paginas/DetallePelicula";
import ResultadosBusqueda from "../paginas/ResultadosBusqueda";
import Header from "../componentes/Header";
import Login from "../paginas/Login";
import AdministrarPeliculas from "../paginas/AdministrarPeliculas";

/*
    COMPONENTE ENVOLVENTES -> WRAP.
    <COMPONENTE SUPERIOR> -> props.children.
        <COMPONENTE INFERIOR>
    </COMPONENTE SUPERIOR>
*/

// React Redux, Saga.

export function Routes(){
    const auth = JSON.parse( localStorage.getItem('auth') );
    const [usuario, setUsuario] = useState(auth);

    return(
        <Switch>
            <Header usuario={usuario} autenticado={setUsuario}>
                <Route exact path="/" component={ResultadosBusqueda} />
                <Route path="/detalle/:id" component={DetallePelicula} />
                <Route path="/administrar">
                    {usuario ? <AdministrarPeliculas /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                    <Login autenticado={setUsuario} />
                </Route>
            </Header>
        </Switch>
    );
}