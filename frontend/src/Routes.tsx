import Home from "pages/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:code">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes