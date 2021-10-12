import Confirmation from "pages/Confirmation";
import Dashboard from "pages/Dashboard";
import Partners from "pages/Partners";
import PartnerCreate from "pages/Partners/create";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/partners" exact={true} component={Partners} />
        <Route path="/partners/create" exact={true} component={PartnerCreate} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
