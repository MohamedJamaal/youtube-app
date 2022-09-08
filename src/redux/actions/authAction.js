// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import auth from '../../firebase';
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from '../actionTypes';

const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    //add google api auth link
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };

    // sessions
    sessionStorage.setItem('ytc-access-token', accessToken);
    sessionStorage.setItem('ytc-user', JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      token: accessToken,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logOut = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,
  });

  sessionStorage.removeItem('ytc-access-token');
  sessionStorage.removeItem('ytc-user');
};

export default login;
