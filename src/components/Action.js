import React from 'react';
import SubmitMovie from './controllers/SubmitMovie';

class Action extends React.Component {
    state = {
        movies: [],
    }

    componentWillMount() {
        fetch('https://sheetsu.com/apis/v1.0/a58a8a714eaf', {
            method: 'GET',
            headers: {
                'Authorization':
                'Basic ' + btoa('yRvBxFHbQbCqu1LqEoxK:WZp67byz9BKZyHsWy8Yg2B82b8zvZeT2bA7pi5n4'),
            },
        })
            .then(response => response.json())
            .catch((error) => console.log('There is an issue: ' + error.message))
            .then((json) => this.setState({ movies: json }))
    }
    render() {
        let movies = this.state.movies
        console.log(movies)
        return (
            <ul className="movies__container">
                <h1>Action</h1>

                {movies.map((movie, index) => (movie.Action !== '') ? <li key={index}>{movie.Action}</li> : null)}

                <SubmitMovie movieCategory={'Action'} />

            </ul>

        )
    }
}

export default Action;