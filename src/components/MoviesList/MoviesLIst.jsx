import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MoviesLIst = ({ movies }) => {
  const location = useLocation();
  // console.log(movies);
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id.toString()}`} state={{ from: location }}>
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
