import jsonPlaceholder from '../api/jsonplaceholder';

export const fetchPosts = async () => {

    // Bad Approach!!! Breaks rules of action creator
    // Actions must be plain actions!!!
    // This will be solved with redux-thunk middleware
    // when transpiled to es2015, we are not exporting a plain js object because async await syntax
    const response = await jsonPlaceholder.get('/posts')
    
    return {
        type: 'FETCH_POSTS',
        payload: response
    }
}