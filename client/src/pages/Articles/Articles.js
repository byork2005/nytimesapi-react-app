import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import logo from '../../components/logo.svg';
import '../../App.css';

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    startyear: "",
    endyear: ""
  };

  handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.topic)
      .then(res => this.setState({
        articles: res.data
        }),
      )
      .catch(err => console.log('Error with Submit: ', err))
      console.log('button clicked')
  

    // if (this.state.topic && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

  render() {
    return (
      <Container fluid>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">NY Times Article Scrubber</h1>
        </header>
        <p className="App-intro">
          Click to see current articles!
        </p>
        <Input value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="Topic" />
        <Input value={this.state.startyear} onChange={this.handleInputChange} name="startyear" placeholder="Start Year" />
        <Input value={this.state.endyear} onChange={this.handleInputChange} name="endyear" placeholder="Start Year" />
        <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
      </div>
    </Container>
    )
  }

}

export default Articles;