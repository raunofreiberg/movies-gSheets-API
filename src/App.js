import React, { Component } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Interface from './components/Interface';
import Action from './components/Action';
import Adventure from './components/Adventure';
import Comedy from './components/Comedy';

class App extends Component {
  state = {
    data: [],
  }

  componentWillMount() {
    fetch('http://sheetsu.com/apis/v1.0/a58a8a714eaf')
      .then(response => response.json())
      .then((json) => this.setState({ data: json }))
      .catch((error) => console.log('There is an issue: ' + error.message))
  }

  render() {


    return (

      <HashRouter>

        <div className="interface__container">

          <Route exact={true} path="/" component={Interface} />
          <Route path="/action" component={Action} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/comedy" component={Comedy} />



        </div>



      </HashRouter>

    );
  }
}

export default App;

