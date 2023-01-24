import React from 'react';

function BookReviewSummary({ bookReviews }) {
    return (
        <div style={{ border: "1px solid black", marginBottom: "10px", padding: "1rem" }}>
            <p>📙 {bookReviews.bookName}</p>
            <p>📝 {bookReviews.author}</p>
            <p>⭐ {bookReviews.review}</p>
        </div>
    );
}

export default BookReviewSummary;