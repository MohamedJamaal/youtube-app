import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from '../actionTypes';

const initialState = {
  accessToken: sessionStorage.getItem('ytc-access-token')
    ? sessionStorage.getItem('ytc-access-token')
    : null,
  user: sessionStorage.getItem('ytc-user')
    ? JSON.parse(sessionStorage.getItem('ytc-user'))
    : null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...initialState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...initialState,
        accessToken: action.payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...initialState,
        accessToken: null,
        loading: false,
        error: action.payload,
      };
    case LOAD_PROFILE:
      return {
        ...initialState,
        accessToken: action.token,
        user: action.payload,
      };

    case LOG_OUT:
      return {
        ...initialState,
        accessToken: null,
        user: null,
      };

    default:
      return initialState;
  }
};

export default authReducer;
