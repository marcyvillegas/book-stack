import React from 'react';
import BookReviewSummary from './BookReviewSummary';
import { connect } from 'react-redux';

function BookReviewList({ bookReviews }) {
  return (
    <div style={{ marginRight: "3rem" }}>

      {bookReviews && bookReviews.map(item => (
        <BookReviewSummary key={item.id} bookReviews={item} />
      ))}
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookReviews: state.bookReview.bookReviews
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     buyCake: number => dispatch(buyCake(number))
//   }
// }


export default connect(mapStateToProps)(BookReviewList);
