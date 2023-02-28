import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <ul className={css.List}>
      <li className={css.Item}>
        <NavLink className={css.Link} to="/">
          Home
        </NavLink>
      </li>
      <li className={css.Item}>
        <NavLink className={css.Link} to="movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
