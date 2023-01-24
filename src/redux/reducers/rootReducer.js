import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReviewReducer from "./bookReviewReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    bookReview: bookReviewReducer
});

export default rootReducer;