import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/moviesAPI';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul className={css.List}>
          {reviews.map(({ id, author, content }) => (
            <li className={css.Item} key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
