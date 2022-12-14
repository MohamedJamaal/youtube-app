import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import { homeVideosReducer } from './reducers/videosReducer';

const initialState = {};

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
