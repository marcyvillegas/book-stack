
const initialState = {
    bookReviews: [
        {
            id: 1,
            bookName: "The Blah",
            author: "sdfa",
            review: "xD"
        },
        {
            id: 2,
            bookName: "Enderdsaf",
            author: "Marcy",
            review: "nie niceniceniceniecniceni"
        }
    ]
}

const bookReviewReducer = (state = initialState, action) => {
    return state
}

export default bookReviewReducer;