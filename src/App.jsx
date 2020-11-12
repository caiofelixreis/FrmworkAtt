import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import AlbumDetail from "./pages/AlbumDetail";
import "./styles/global.scss";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <PrivateRoute path="/:id" component={AlbumDetail} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
