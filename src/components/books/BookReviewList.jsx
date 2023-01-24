import React from 'react';
import BookReviewSummary from './BookReviewSummary';

function BookReviewList() {
  return (
    <div style={{marginRight: "3rem"}}>
      <BookReviewSummary />
      <BookReviewSummary />
      <BookReviewSummary />
    </div>
  );
}

export default BookReviewList;
