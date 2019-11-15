import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

import Home from './layout/home/home'
import Characters from "./layout/characters/Characters";
import Comics from "./layout/comics/Comics";
import SingleCharacter from "./layout/singleCharacter/singleCharacter";
import Error from './layout/error/error';

export default function App() {
    return (
        <Router>
            <div className={'app'}>
                <Header />             
                <Switch>
                    <Route exact path="/" component={Home} />                           
                    <Route exact path="/characters" component={Characters} />
                    <Route path="/characters/:id" component={SingleCharacter} />
                    <Route exact path="/comics" component={Comics} />
                    <Route path='*' component={Error} />
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}