// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({movies}) =>
    <div className="review-list"> 
        <ul> 
            {movies.map((movie) => (
                <li key={movie.headline} className="review">
                    <a href={movie.link.url}> {movie.display_title} </a>
                </li>
            ))}
        </ul>
    </div>

export default MovieReviews 