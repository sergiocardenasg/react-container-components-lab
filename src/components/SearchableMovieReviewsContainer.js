import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'mSIVTbmdjEGFGHGOlX5ZJnpXGaPobEkR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then((response) => response.json())
        .then((reviewData) => this.setState({reviews: reviewData.results }));
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
                    <submit className="btn btn-success" onClick={this.handleSubmit}>Find Reviews</submit>
                    <MovieReviews movies={this.state.reviews}/>
                </form>
            </div>
        )
    }
}
