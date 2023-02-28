import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesLIst.module.css';

export const MoviesLIst = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.List}>
      {movies.map(({ id, title }) => {
        return (
          <li key={id} className={css.Item}>
            <Link
              className={css.Link}
              to={`/movies/${id.toString()}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesLIst.propTypes = {
  movies: PropTypes.array,
};
