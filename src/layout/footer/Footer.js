import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Footer.sass';


const Footer = () => {
  return (
      <footer className={'main-footer'}>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
        <div className="copyright">
          <Container>
            <p>Marvel 2019</p>
          </Container>
        </div>
      </footer>
    );
};


export default Footer;
