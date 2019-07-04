import React from "react";
import {BrowserRouter as Routing} from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header/Header";

import PageRouting from "./components/routing";

const App = () => {
    return (
        <div className="App">
            <Routing>
                <Header />
                <PageRouting />
            </Routing>
        </div>
    );
};

export default App;
