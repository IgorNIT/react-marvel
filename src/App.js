import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import HomePage from './components/pages/home/home'
import Header from "./components/header/Header";
import Characters from "./components/pages/catalog/catalog";
import Comics from "./components/pages/comics/index";
import './App.css';
import Container from "@material-ui/core/Container";

export default function App() {
    return (
        <Router>
            <div className={'app'}>
                <Header />
                <Container maxWidth="lg">
                    <div>
                        <Route path="/">
                            <HomePage />
                        </Route>
                        <Route path="/characters">
                            <Characters />
                        </Route>
                        <Route path="/comics">
                            <Comics />
                        </Route>
                    </div>
                </Container>
            </div>
        </Router>
    )
}