import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import login from '../../redux/actions/authAction';
import './LoginScreen.scss';

const LoginScreen = () => {
  // dispatch login action
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };

  // get state info //
  const accessToken = useSelector((state) => state.auth.accessToken);
  // const usereName = useSelector((state) => state.auth.name);

  // const history = useHistory();
  const history = useNavigate();

  useEffect(() => {
    if (accessToken) {
      history('/');
    }
  }, [accessToken, history]);

  // useEffect(() => {
  //   if (usereName) {
  //     history('/');
  //   }
  // }, [usereName, history]);

  return (
    <div className="login">
      <div className="login__container">
        <h2>Youtube Clone</h2>
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This Project made by Mohamed Jamaal</p>
      </div>
    </div>
  );
};

export default LoginScreen;
