import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Entrar from "./Paginas/Entrar";
import Detalhe from "./Paginas/Detalhe";
import "./styles/global.scss";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const logado = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        logado ? <Component {...props} /> : <Redirect to="/entrar" />
      }
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={Principal} exact />
        <Route path="/entrar" component={Entrar} exact />
        <PrivateRoute path="/:id" component={Detalhe} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
