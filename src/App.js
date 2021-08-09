import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { DetailMoviesScreen, HomeScreen } from "./pages";

import { Provider } from 'react-redux'
import store from "./redux/store";

export default function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}
