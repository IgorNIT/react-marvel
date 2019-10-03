import React from 'react';
import ReactDOM from 'react-dom'
//import { BrowserRouter } from 'react-router-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import './index.css'
import App from './App'
import Catalog from './components/pages/catalog/catalog'

import * as serviceWorker from './serviceWorker'



const routing = (
    <Router>
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
    <Switch>
      <div>
        <Route path="/" component={App} />       
        <Route path="/catalog" component={Catalog} />
      </div>
      </Switch>
      </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
