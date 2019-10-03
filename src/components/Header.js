import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import logo from './../logo.png';

class Header extends Component {
  render() {   
    return (
      <header className="app-header">
        <AppBar position="static">        
          <Toolbar>
            <Container maxWidth="lg">
              <div>    
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>                 
                  <li>
                    <Link to="/catalog">Catalog</Link>
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
