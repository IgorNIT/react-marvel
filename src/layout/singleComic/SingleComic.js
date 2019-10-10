import React, { Component } from "react";
import axios from 'axios';
import  marvelApi from '../../config/marvelApi'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap-grid.css';

import './SingleComic.sass';

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
                            <Col md={6} lg={6}>
                                <div className="comic-page__image">
                                    <img src= {this.state.post.images[0].path + '.' + this.state.post.images[0].extension} alt={this.state.post.variantDescription} />
                                </div>
                            </Col>
                             <Col md={6} lg={6}>
                                 <div className={'comic-page__info'}>
                                     <h1 className={'comic-page__h1'}>{this.state.post.variantDescription}</h1>
                                     <p>{this.state.post.description}</p>
                                 </div>

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
