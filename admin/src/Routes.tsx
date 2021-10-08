import Dashboard from "pages/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
