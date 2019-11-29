import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HOME_PAGE } from "./constants/const";

import { Provider } from "./context.jsx"
import { Navbar } from "./components/layout/Navbar";
import { Index } from "./components/layout/Index";
import Lyrics from "./components/Tracks/Lyrics";


const App = () => (
      <Provider>
        <Router >
            <>
                <Navbar />
                <div className="container">
                    <Switch >
                        <Route exact path={ HOME_PAGE } component={ Index } />
                        <Route path="/lyrics/track/:id" component={ Lyrics } />
                    </Switch>
                </div>
            </>
        </Router>
      </Provider>
);

export default App;
