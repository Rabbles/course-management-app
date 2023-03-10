import React from "react";
import {Routes, Route} from "react-router-dom";
import AboutPage from "./about/AboutPage"
import HomePage from "./home/HomePage";
import Header from "../common/Header";
import PageNotFound from "./PageNotFound";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </div>
    )
}

export default App;