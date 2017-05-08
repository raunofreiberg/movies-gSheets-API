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

  componentDidMount() {
    fetch('https://sheetsu.com/apis/v1.0/a58a8a714eaf')
      .then(response => response.json())
      .then((json) => this.setState({ data: json }));


  }



  render() {
    let films = this.state.films
    let data = this.state.data
    console.log(data)

    return (

      <BrowserRouter>

        <div className="interface__container">

          <Route exact={true} path="/" component={Interface} />
          <Route path="/action" component={Action} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/comedy" component={Comedy} />


          <form sheetsu="https://sheetsu.com/apis/v1.0/a58a8a714eaf" sheetsu-after-submit="http://google.com">
            <input type="text" name="Action" placeholder="Movie name" />

            <input type="submit" />
          </form>
        </div>



      </BrowserRouter>

    );
  }
}

export default App;

