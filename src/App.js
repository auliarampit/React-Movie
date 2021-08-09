import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { DetailMoviesScreen, HomeScreen } from "./pages";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
                <Route exact path="/detail-movie">
                    <DetailMoviesScreen />
                </Route>
            </Switch>
        </Router>
    );
}
