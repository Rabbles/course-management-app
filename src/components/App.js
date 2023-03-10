import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import AboutPage from "./about/AboutPage"
import HomePage from "./home/HomePage";
import Header from "../common/Header";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>

        </div>
    )
}

export default App;