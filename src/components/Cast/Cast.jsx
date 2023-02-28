import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/moviesAPI';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={css.List}>
          {cast.map(({ id, profile_path, character, name }) => (
            <li key={id} className={css.Item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://vaksi.by/design/verona/images/no_image.png'
                }
                alt="name"
                width="100"
              />
              <p>{character}</p>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
