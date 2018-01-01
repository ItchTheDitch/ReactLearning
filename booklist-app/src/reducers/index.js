import { combineReducers } from 'redux';
import BooksReducer from './reducer_book';
import ActiveBook from './red_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
