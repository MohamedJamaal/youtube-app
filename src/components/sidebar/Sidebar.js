import React from 'react';
import './_sidebar.scss';
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/authAction';

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  // logout handler
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <nav
      className={sidebar ? 'sidebar open' : ' sidebar'}
      onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscription</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't Know</span>
      </li>
      <li onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
    </nav>
  );
};

export default Sidebar;
