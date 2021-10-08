import Confirmation from "pages/Confirmation";
import Dashboard from "pages/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
