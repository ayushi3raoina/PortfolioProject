import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <AboutMe />
            </main>
        </div>
    );
}

export default App;