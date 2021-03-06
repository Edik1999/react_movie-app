import React from 'react';
import axios from 'axios';
import Movie from '../components/movie';
import './Home.css';
import Loader from '../img/829.gif';

class Home extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () =>{
    const {data: {data : {movies},},} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies: movies, isLoading: false})
  }

  componentDidMount(){
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"><img src={Loader} alt="loading..."></img></span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                rating={movie.rating}
                genres={movie.genres}
                bigPoster={movie.large_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
