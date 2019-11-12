import React, { Component } from "react";
import axios from 'axios';
import  marvelApi from '../../config/marvelApi'

import HeaderBanner from '../../components/header_banner/HeaderBanner';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from "../../components/card/Card";

import "./Characters.sass"


import BannerImage from '../../images/top_banners/characters_bg.jpg'
import Pagination from "../../components/pagination/Pagination";
import PaginationNumber from "../../components/PginatinNumber/PaginationNumber";

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
              <div className="characters-page">
                <HeaderBanner image={BannerImage} title={'Characters'} />
                <Container>
                  <Row>
                  {this.state.posts.map( (post) => (
                      <Col key={post.id} lg="3" md="6" xs="12">
                          <Card
                              title={post.name}
                              image={post.thumbnail.path + '.' + post.thumbnail.extension}
                              link="#"
                          />
                      </Col>
                  ))}
                   </Row>
                    <Row>
                        <Col className='align-content-lg-center'>
                            <Pagination/>
                        </Col>
                        <Col className='flex-grow-0'>
                            <PaginationNumber/>
                        </Col>
                    </Row>
                </Container>
              </div>
        );
    }
}

export default Characters;