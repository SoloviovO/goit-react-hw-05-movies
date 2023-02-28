import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieInfo.module.css';

export const MovieInfo = ({ movieInfo }) => {
  const location = useLocation();
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;

  return (
    <>
      <Link className={css.Btn} to={location.state?.from ?? '/'}>
        Go back
      </Link>
      <div className={css.Wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="200"
        />
        <div className={css.Box}>
          <span className={css.Title}>{title}</span>
          <span>({release_date.slice(0, 4)})</span>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <p>Overview</p>
          <p>{overview}</p>
          <p>Genres</p>
          <p>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

MovieInfo.propTypes = {
  movieInfo: PropTypes.object,
};
