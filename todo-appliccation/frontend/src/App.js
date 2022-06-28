import React, { useState } from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import AddEdit from "./views/AddEdit";
import Home from "./views/Home";

const App = () => {
    const [page, setPage] = useState("home");
    const [editingId, setEditingId] = useState(null);

    return (
        <div className="app">
            <Header page={page} setPage={setPage} />
            {page === "home" && (
                <Home setPage={setPage} setEditingId={setEditingId} />
            )}
            {page === "add" && <AddEdit pageType="add" setPage={setPage} />}
            {page === "edit" && (
                <AddEdit
                    pageType="edit"
                    setPage={setPage}
                    editingId={editingId}
                />
            )}
        </div>
    );
};

export default App;
