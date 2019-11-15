import React, { Component } from "react";
import axios from 'axios';
import  marvelApi from '../../config/marvelApi'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Title from "../../components/Title/Title";
import ListGroup from "../../components/list/ListGroup";
import ListGroupItem from "../../components/list/ListGroupItem";



import './singleCharacter.sass';


class SingleCharacter extends Component {

    constructor(props) {
      super(props);
      this.marvelApi = marvelApi.GenerateApiData();
      this.comicId = this.props.match.params.id || '';
      this.requestUrl = `${this.marvelApi.baseUrl}/characters/${this.comicId}${this.marvelApi.apiKey}`;
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
                                    <img src= {this.state.post.thumbnail.path + '.' + this.state.post.thumbnail.extension} alt={this.state.post.name} />
                                </div>
                            </Col>
                             <Col sm={12} md={6} lg={6}>
                                 <Title tag='h1'>{this.state.post.name}</Title>
                                 <div className={'comic-page__info'}>
                                    <p>{this.state.post.description}</p>
                                 </div>
                                 <Title tag='h2' underline={false}>Comics {this.state.post.comics.available}</Title>
                                 <ListGroup tag='ul' direction='column' className={'list-group--story'}>
                                     { this.state.post.comics.items.map( (comics , index) =>
                                         <ListGroupItem tag='li' key={index}>
                                             <span>{comics.name}</span>
                                         </ListGroupItem>
                                     )}
                                 </ListGroup>
                                 <Title tag='h2' underline={false}>Stories {this.state.post.stories.available}</Title>
                                 <ListGroup tag='ul' direction='column' className={'list-group--story'}>
                                     { this.state.post.stories.items.map( (story , index) =>
                                         <ListGroupItem tag='li' key={index}>
                                             <span>{story.name.replace(/ - Int.*$/,"")}</span>
                                         </ListGroupItem>
                                     )}
                                 </ListGroup>
                                 <Title tag='h2' underline={false}>Events {this.state.post.events.available}</Title>
                                 <ListGroup tag='ul' direction='column' className={'list-group--story'}>
                                     { this.state.post.events.items.map( (events , index) =>
                                         <ListGroupItem tag='li' key={index}>
                                             <span>{events.name}</span>
                                         </ListGroupItem>
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

export default SingleCharacter;
