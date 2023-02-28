import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/moviesAPI';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieInfo(movieId).then(setMovieInfo);
  }, [movieId]);

  return (
    <>
      {movieInfo && <MovieInfo movieInfo={movieInfo} />}
      <ul style={{ listStyle: 'none' }}>
        <li>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="cast"
            state={location.state ?? '/'}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="reviews"
            state={location.state ?? '/'}
          >
            Reviwers
          </Link>
        </li>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ul>
    </>
  );
};

export default MovieDetails;
