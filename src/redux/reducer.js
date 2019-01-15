// eslint-disable-next-line
import posts from '../data/posts'

const postReducer = function posts(state = posts, action) {
    if (action.type === "REMOVE_POST") {
        return state.filter(post => post.id !== action.index)
    }
    return state;
}

export default postReducer