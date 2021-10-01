import Home from "pages/Home";
import Reserve from "pages/Reserve";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/partner/:code">
                    <Home/>
                </Route>
                <Route path="/reserve" exact={true} component={Reserve}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
