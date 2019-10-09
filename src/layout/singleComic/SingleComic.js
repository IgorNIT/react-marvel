import React, { Component } from "react";
import axios from 'axios';
import  marvelApi from '../../config/marvelApi'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap-grid.css';

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
      console.log(this.requestUrl);
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
            <>
                <Container>
                    <Row>
                        { this.state.post.length === 0  ?  (<div>loading...................</div>) : (
                            <>
                        <Col md={6} lg={6}>
                            <img src= {this.state.post.images[0].path + '.' + this.state.post.images[0].extension} />
                        </Col>
                         <Col md={6} lg={6}>
                            {this.state.post.description}
                        </Col>
                        </>

                          )}
                    </Row>
                </Container>
            </>
        );
    }

}

export default SingleComic;
