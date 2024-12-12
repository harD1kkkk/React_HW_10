import React from 'react';
import { useSelector } from 'react-redux';
import './Reviews.css';

const ReviewList = () => {
  const reviews = useSelector((state) => state.reviews);

  return (
    <div className="container">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <small>Rating: {review.rating}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
