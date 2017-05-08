import React from 'react';

class Adventure extends React.Component {
    state = {    
    movies: [],
  }

  componentDidMount() {
    fetch('https://sheetsu.com/apis/v1.0/a58a8a714eaf')
      .then(response => response.json())
      .then((json) => this.setState({movies: json}));

  }
    render() {
        let movies = this.state.movies
        return ( 
            <ul className="movies__container">
                <h1>Adventure</h1>
                {movies.map((movie, index) => <li key={index}>{movie.Adventure}</li>)}
            </ul>
        )
    }
}

export default Adventure;