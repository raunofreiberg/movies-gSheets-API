import React from 'react';
import { Redirect } from 'react-router';

class SubmitMovie extends React.Component {
    state = {
        fireRedirect: false
    }
    submitForm = (e) => {        
        e.preventDefault()
        this.setState({ fireRedirect: true })
    }
    render() {
        const { fireRedirect } = this.state
        return (
            <div>
                <form onSubmitSuccess={this.submitForm} method="POST" action="https://sheetsu.com/apis/v1.0/a58a8a714eaf">
                    <input className="movie__input" type="text" name={this.props.movieCategory} placeholder="Movie name" />

                    <input type="submit" className="submit__btn" />
                </form>
                {fireRedirect && (
                    <Redirect to={'/thank-you'} />
                )}
            </div>
        )
    }
}

export default SubmitMovie;