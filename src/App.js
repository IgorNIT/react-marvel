import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

import Home from './layout/home/home'
import Characters from "./layout/characters/Characters";
import Comics from "./layout/comics/Comics";
import SingleComic from "./layout/singleComic/SingleComic";

import './App.css';

export default function App() {
    return (
        <Router>
            <div className={'app'}>
                <Header />             
                <Switch>
                    <Route exact path="/" component={Home} />                           
                    <Route exact path="/characters" component={Characters} />  
                    <Route exact path="/comics" component={Comics} />
                    <Route exact path="/comic" component={SingleComic} />
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}