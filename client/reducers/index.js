import { combineReducers } from 'redux';
import { routerReducer} frome 'react-router-redux'

import posts from './posts';
import comments from './comments';
const rootReducer = comineReducers({posts, comments, router: routerReducer });

export default rootReducer;
