import React from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import Home from "./views/Home";

const App = () => {
    return (
        <div className="app">
            <Header />
			<Home />
        </div>
    );
};

export default App;
