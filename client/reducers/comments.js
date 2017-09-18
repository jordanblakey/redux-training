function postcomments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      // return the new state with the comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      console.log('Removing a comment');
      // we need to return the new state without the deleted comment.
      return [
        // from the start to the target
        ...state.slice(0, action.i),
        // after the deleted one to the end
        ...state.slice(action.i + 1)
      ]
      return state;
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postcomments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
