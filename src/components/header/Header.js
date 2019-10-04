import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import logo from './../logo.png';
import './header-style.css';

class Header extends Component {
  render() {   
    return (
      <header className="app-header">
        <AppBar position="static">        
          <Toolbar>
            <Container maxWidth="lg">
              <div>

              <nav>
                <ul className={'nav-list'}>
                  <li className={'nav-list__item'}>
                    <Link to="/">Home</Link>
                  </li>                 
                  <li className={'nav-list__item'}>
                    <Link to="/characters">Characters</Link>
                  </li>
                  <li className={'nav-list__item'}>
                    <Link to="/comics">Comics</Link>
                  </li>
                </ul>
              </nav>

              </div>
            </Container>
          </Toolbar>         
        </AppBar>
          <div>        
            <h1 className="app-title">React Marvel</h1>
          </div>
      </header>
    );
  }
}

export default Header;
