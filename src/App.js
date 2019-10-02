import React, { Component } from "react";
import axios from 'axios';
import Header from "./components/Header";
import Loading from "./components/Loading";
//import { marvelApi as config } from '../config'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
        posts: []        
      };  
  }
  componentDidMount() {
       
    axios.get( "https://api.nasa.gov/planetary/apod?api_key=SkaeQVc2fa3Ffle5ixCgzhvuCLeNwRvjRU6RLlzI")
      .then(res =>{
        const posts = res.data;
        console.log(res.data);
        this.setState({posts});        
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }


  //   axios.get( "https://rxhormone.com/wp-json/wp/v2/posts")
  //     .then(res =>{
  //       const posts = res.data;
  //       this.setState({posts});        
  //   });
  // } 
  
 
/*
  async componentDidMount() {
    // error handling is important when fetching data
    try {
      await fetch(this.state.dataRoute)
        .then(res => res.json())
        .then(sections =>
          this.setState((prevState, props) => {
            //return { sections: sections};
            return { sections: sections.map(this.mapSection) };
          })
        );
    } catch (error) {
      console.log(error);
    }
  }
  */

  /*

  mapSection(section) {
    return {
      title: section.title,
      content: section.content.rendered      
    };
  }
  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="main">
          {this.state.posts.length === 0 && <Loading />}
          {console.log(this.state.posts)}
          <ul>
      
          </ul>
        </div>    
        <footer>
          <p>Simple page</p>
        </footer>       
      </div>
    );
  }
}


export default App;