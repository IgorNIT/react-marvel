import React, { Component } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Header from "./components/Header";
import Loading from "./components/Loading";
import  marvelApi from './config/marvelApi'
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.data = marvelApi.getCharacters();
    this.state = {
        posts: []        
      };
  }
  componentDidMount() {
       
    axios.get( this.data)
      .then(res =>{
        const posts = res.data.data.results;
        console.log(posts);
        this.setState({posts});        
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
 
/*
  async componentDidMount() {
    // error handling is important when fetching data
    try {
      await fetch(this.state.dataRoute)
        .then(res => res.json())
        .then(sections =>
          this.setState((prevState, props) => {
            //return { sections: sections};
            return { sections: sections.map(this.mapSection) };
          })
        );
    } catch (error) {
      console.log(error);
    }
  }
  */

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="main">
          {this.state.posts.length === 0 && <Loading />}
      
          <div>
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
          </Grid>
          </div>
        </div>    
        <footer>
          <p>Simple page</p>
        </footer>       
      </div>
    );
  }
}


export default App;