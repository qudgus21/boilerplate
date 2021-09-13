import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

const MyRouter: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default MyRouter;
