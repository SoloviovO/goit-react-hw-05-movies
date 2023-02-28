import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/moviesAPI';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, profile_path, character, name }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt="name"
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
