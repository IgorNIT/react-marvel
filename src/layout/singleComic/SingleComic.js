import React, { Component } from "react";
import axios from 'axios';
import  marvelApi from '../../config/marvelApi'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Title from "../../components/Title/Title";
import ListGroup from "../../components/list/ListGroup";



import './SingleComic.sass';
import divWithClassName from "react-bootstrap/es/utils/divWithClassName";

//import HeaderBanner from "../../components/header_banner/HeaderBanner";
//import Container from "@material-ui/core/Container";



class SingleComic extends Component {

    constructor(props) {
      super(props);
      this.marvelApi = marvelApi.GenerateApiData();
      this.comicId = '1886';
      this.requestUrl = `${this.marvelApi.baseUrl}/comics/${this.comicId}${this.marvelApi.apiKey}`;
      this.state = {
          post: []
      };
    }

    componentDidMount() {
      axios.get(this.requestUrl)
        .then(res =>{
          const post = res.data.data.results[0];
          console.log(post);
          this.setState({post});
        })

        .catch(function (error) {
          console.log(error);
        })
    }

    render() {
        return (
            <div className={'comic-page'}>
                <Container>
                    <Row>
                        { this.state.post.length === 0  ?  (<div>loading...................</div>) : (
                        <>
                            <Col sm={12}  md={6} lg={6}>
                                <div className="comic-page__image">
                                    <img src= {this.state.post.images[0].path + '.' + this.state.post.images[0].extension} alt={this.state.post.variantDescription} />
                                </div>
                            </Col>
                             <Col sm={12} md={6} lg={6}>
                                 <Title tag='h1'>{this.state.post.variantDescription}</Title>
                                 <div className={'comic-page__info'}>
                                     <p>{this.state.post.description}</p>
                                 </div>
                                 <Title tag='h3' underline={false}>Creators</Title>
                                 <ListGroup>
                                     { this.state.post.creators.items.map( (creator , index) =>
                                         <div key={index}>
                                             <span>{creator.name}</span>
                                             <span>{creator.role}</span>
                                         </div>
                                     )}
                                 </ListGroup>
                            </Col>
                        </>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SingleComic;
