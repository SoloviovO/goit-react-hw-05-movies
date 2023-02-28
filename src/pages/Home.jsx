import { getPopularMovies } from 'services/moviesAPI';
import { useEffect, useState } from 'react';
import { MoviesLIst } from 'components/MoviesList/MoviesLIst';

const Home = () => {
  const [movies, setMovies] = useState(null);

  function fetchMovies() {
    getPopularMovies().then(setMovies);
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    movies && (
      <>
        <h2>Trending today</h2>
        <MoviesLIst movies={movies} />
      </>
    )
  );
};

export default Home;
