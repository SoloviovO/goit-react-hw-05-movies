import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/moviesAPI';
import { MoviesLIst } from 'components/MoviesList/MoviesLIst';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query');

  function handleFormSubmit(query) {
    setSearchParams({ query });
  }

  useEffect(() => {
    function fetchMovies() {
      getSearchMovies(filter).then(setMovies);
    }

    fetchMovies(filter);
  }, [filter]);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && <MoviesLIst movies={movies} />}
    </>
  );
};

export default Movies;
