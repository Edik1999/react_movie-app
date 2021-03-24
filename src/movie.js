import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({ id, year, title, summary, poster , rating, genres }) {
    return (
        <div className='movie'>
            <img src={poster} alt={title} title={title}></img>
            <div className='movie__column'>
                <h3 className="movie__title">{title}  ({rating})</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index } className="movie__genre">{genre}</li>;
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;