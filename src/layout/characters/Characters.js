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
      this.handleLimitChange = this.handleLimitChange.bind(this);
      this.state = {
          posts: [],
          offset: 0,
          limit: 20,
          total: 0,
      };
        this.marvelApi = marvelApi.GenerateApiData();
    }

    generateUrl (){
        let limit = this.state.limit === 20 ? '': `?limit=${this.state.limit}`;
        return `${this.marvelApi.baseUrl}characters${limit}${this.marvelApi.apiKey}`;
    }

    handleLimitChange(newlimit){
        this.setState({limit: newlimit})
    }

/*    handleNextPage(){
        this.setState( {offset : offset + 1})
    }*/

    componentDidMount() {
      axios.get(this.generateUrl())
        .then(res =>{
          const posts = res.data.data.results;
          const offset = res.data.data.offset;
          const limit = res.data.data.limit;
          const total = res.data.data.total;
          console.log(res);
          this.setState({posts , offset, limit, total});
        })
  
        .catch(function (error) {
          console.log(error);
        })
    }

    render() {
        const limit = this.state.limit;

        return (
              <div className="characters-page">
                <HeaderBanner image={BannerImage} title={'Characters'} />
                <Container>
                  <Row>
                  {this.state.posts.map( (post) => (
                      <Col key={post.id} lg="3" md="6" xs="12">
                          <Card
                              id={post.id}
                              link={`/characters/${post.id}`}
                              title={post.name}
                              image={post.thumbnail.path + '.' + post.thumbnail.extension}
                          />
                      </Col>
                  ))}
                   </Row>
                    <Row>
                        <Col className='align-content-lg-center'>
                            <Pagination offset={this.state.offset}/>
                        </Col>
                        <Col className='flex-grow-0'>
                            <PaginationNumber
                                onLimitChange={this.handleLimitChange}
                                limit={limit}
                            />
                        </Col>
                    </Row>
                    <div>{limit}</div>
                </Container>
              </div>
        );
    }
}


export default Characters;


