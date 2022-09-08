import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from '../actionTypes';

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
};

export const homeVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...initialState,
        videos: action.payload.videos,
        loading: false,
        nextPageToken: action.payload.nextPageToken,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...initialState,
        // videos: action.payload,
        loading: true,
      };
    default:
      return initialState;
  }
};
