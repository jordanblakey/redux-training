// A reducer takes in 2 things:
// 1. The action
// 2. A copy of the current state
// 3. Returns an updated copy of the store

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action)
  return state;
}

export default posts;
