import React, { Component } from 'react';
import './App.css';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react';

class App extends Component {
  state = {}
  componentDidMount() {
    this.getDrinks()
  }
  fetch (url) {
    return window.fetch(url)
    .then(res => res.json())
    .catch(err => err)
  }

  getDrinks() {
    this.fetch('/api/drinks') 
    .then(drinks => {
      if (drinks.length) {
        this.setState({drinks: drinks})
        this.getDrink(drinks[0].id)
      } else {
        this.setState({drinks: []})
      }
    })
  } 
  getDrink(id) {
    this.fetch(`/api/drinks/${id}`)
    .then(drink => this.setState({drink: drink}))
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
