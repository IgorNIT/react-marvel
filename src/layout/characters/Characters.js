import React, { Component } from "react";
import axios from 'axios';
import  marvelApi from '../../config/marvelApi'




import HeaderBanner from '../../components/header_banner/HeaderBanner';
import Container from "@material-ui/core/Container";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import BannerImage from '../../images/top_banners/characters_bg.jpg'


import styled from 'styled-components';



const Banner = {
  background:  `url(${BannerImage}) no-repeat center `,
  backgroundSize: 'cover',
  display: 'flex',
  margin: " 0 0 40px 0"
}

const BannerContainer = {
  display: 'flex',
  alignItems: 'center',
}

const BannnerTitle = {
  margin: '0',
  color: '#fff',
  fontSize: '40px',
}

const styles = {
  Banner: Banner,
  BannerTitle: BannnerTitle,
  BannerContainer: BannerContainer,
}



class Characters extends Component {

    constructor(props) {
      super(props);
      this.marvelApi = marvelApi.GenerateApiData();
      this.requestUrl = `${this.marvelApi.baseUrl}characters${this.marvelApi.apiKey}`;
      this.state = {
          posts: []        
        };
      console.log(this.requestUrl);
    }

    componentDidMount() {
      axios.get(this.requestUrl)
        .then(res =>{
          const posts = res.data.data.results;
          console.log(res);
          this.setState({posts});        
        })
  
        .catch(function (error) {
          console.log(error);
        })
    }

    render() {
        return (
          <>
            <HeaderBanner style={styles.Banner} >         
              <Container maxWidth="lg" style={styles.BannerContainer}> 
                <h1 style={styles.BannerTitle}>Characters</h1>
              </Container>     
            </HeaderBanner>                
            <Container maxWidth="lg">      
              <GridList cellHeight={180} cols={4} spacing={30} >          
              {this.state.posts.map( (post, index) => (
                  <GridListTile key={post.id}>
                  <img src={post.thumbnail.path + '.' + post.thumbnail.extension} alt={post.name} />
                    <GridListTileBar
                      title={post.name}
                      subtitle={<span>Comics: {post.stories.available}</span>}                    
                    />
                  </GridListTile>
              ))}
              </GridList>
            </Container>
          </>
        );
    }
}

export default Characters;