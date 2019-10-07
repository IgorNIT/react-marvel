import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/header/Header";

import Home from './layout/home/home'
import Characters from "./layout/characters/Characters";
import Comics from "./layout/comics/Comics";
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
                </Switch>             
            </div>
        </Router>
    )
}