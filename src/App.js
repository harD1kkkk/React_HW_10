import React from 'react';
import AddReview from './components/AddReview';
import ReviewList from './components/ReviewList';

const App = () => {
  return (
    <div>
      <h1>Reviews Page</h1>
      <AddReview />
      <ReviewList />
    </div>
  );
};

export default App;
