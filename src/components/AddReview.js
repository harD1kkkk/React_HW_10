import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../Redux/reviewsSlice';
import './Reviews.css';

const AddReview = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      dispatch(addReview({ text: reviewText, rating, id: Date.now() }));
      setReviewText('');
      setRating(5);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="review">Your Review</label>
        <textarea
          id="review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows="4"
          placeholder="Write your review here..."
        ></textarea>
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;
