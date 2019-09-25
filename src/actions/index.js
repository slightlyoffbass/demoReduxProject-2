import _ from 'lodash';
import jsonPlaceholder from '../api/jsonplaceholder';

export const fetchPosts = () => async dispatch => {
  
        const promise = await jsonPlaceholder.get('/posts');
    
        dispatch({ 
            type: 'FETCH_POSTS', 
            payload: promise.data
        });
  
};

export const fetchUser =  id  =>  dispatch => {
    _fetchUser(id,dispatch);

};

// underscore for private function
// memoize allows id to be called once, vs makeing call every time
const _fetchUser = _.memoize(async(id,dispatch) =>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});

    //const response = await jsonPlaceholder.get('/posts')
    // Bad Approach!!! Breaks rules of action creator
    // Actions must be plain actions!!!
    // This will be solved with redux-thunk middleware
    // when transpiled to es2015, we are not exporting a plain js object because async await syntax
    // getState was ommited from...