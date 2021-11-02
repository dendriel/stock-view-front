import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
        </Switch>
    )
}
