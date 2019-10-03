import React, { Component } from "react";
import axios from 'axios';
import  marvelApi from '../../../config/marvelApi'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Divider } from '@material-ui/core';
import Loading from "../../Loading";

class Catalog extends Component {



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
            <div>
            {this.state.posts.length === 0 && <Loading />}           
            <GridList cellHeight={180} cols={4} spacing={30} >          
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
        );
    }
}

export default Catalog;