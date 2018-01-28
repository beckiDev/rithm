import React, { Component } from 'react';
import RandomJoke from './RandomJoke';

import List from './List';

import './main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
      best5jokes: [],
      showUp: true,
      showDown: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  handleUp =()=>{
    this.setState({
      best5jokes: [...this.state.best5jokes, this.state.joke],
      showUp: false
    })
  }
  handleDown =()=>{
    this.setState({
      best5jokes: [...this.state.best5jokes, ''],
      showDown: false
    })
  }
  fetchData =()=>{
    const jokeUrl = 'http://api.icndb.com/jokes/random';
    fetch(jokeUrl, {
      method: "GET",
      dataType: "JSON",
    })
    .then(response => response.json())
    .then(data => {
      if(data.type ==='success'){
        this.setState({ joke: data.value.joke })
      }
    });
  }
  render() {
    console.log(this.state)
    const joke  = this.state.joke;
    const five = this.state.best5jokes;

    return (
      <div className="App">
      <h2>List of favorit jokes</h2>
      <List jokes={five} />
        <h2>Enjoy random joke</h2>
        <RandomJoke joke={joke} />

        <p>To vote for joke that you like push arrow up</p>
        <div className="vote">
          <button className="fa fa-caret-square-o-up" onClick={this.handleUp} disabled={!this.state.showUp}></button>
          <button className="fa fa-caret-square-o-down" onClick={this.handleDown} disabled={!this.state.showDown}></button>
        </div>
        <button className="generate" onClick={this.fetchData}>GENERATE</button>
      </div>
    );
  }
}

export default App;
