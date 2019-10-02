import React, { Component } from "react";
import axios from 'axios';

//import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import ListSubheader from '@material-ui/core/ListSubheader';
//import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';

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
        console.log(error);
      })
  }

  render() {
    return (
      <div className="app">       
        <AppBar position="static">        
          <Toolbar>
            <Container maxWidth="lg">
              <div>menu</div>
            </Container>
          </Toolbar>         
        </AppBar>
        <Container maxWidth="lg">
          <header className="app-header">
            <Header/>
          </header>
          <div className="app-main">
            {this.state.posts.length === 0 && <Loading />}            
            <GridList cellHeight={180} >          
              {this.state.posts.map(post => (
                <GridListTile key={post.thumbnail}>
                  <img src={post.thumbnail.path + '.' + post.thumbnail.extension} alt={post.title} />
                  <GridListTileBar
                    title={post.name}
                    subtitle={<span>Comics: {post.stories.available}</span>}                    
                  />
                </GridListTile>
              ))}
            </GridList>
            
          </div>
        </Container>
    </div>          
    );
  }
}

export default App;