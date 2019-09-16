import { combineReducers } from 'redux';
import postReducer from './postsReducer';

export default combineReducers({
    // dummy method to use when no reducers have been created yet
    // replaceMe:() =>'repace me'
    
    posts: postReducer

});