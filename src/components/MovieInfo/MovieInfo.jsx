import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MovieInfo = ({ movieInfo }) => {
  const location = useLocation();
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;

  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>{title}</p>
      <p>{release_date.slice(0, 4)}</p>
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <p>
        {genres.map(genre => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </p>
    </>
  );
};

MovieInfo.propTypes = {
  movieInfo: PropTypes.object,
};
