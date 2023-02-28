import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css.Form}>
        <input
          className={css.Input}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
        />
        <button className={css.Btn} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
