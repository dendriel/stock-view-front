import {Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Prices from "./pages/prices";
import Radar from "./pages/radar";


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/home">
                <Home />
            </Route>

            <Route path="/prices/:ticker">
                <Prices />
            </Route>

            <Route path="/radar/:ticker">
                <Radar />
            </Route>

            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
}
