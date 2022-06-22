import React from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import AddEdit from "./views/AddEdit";
import Home from "./views/Home";

const App = () => {
    return (
        <div className="app">
            <Header />
			{/* <Home /> */}
            {/* <AddEdit pageType="add"/> */}
            <AddEdit pageType="edit"/>
        </div>
    );
};

export default App;
