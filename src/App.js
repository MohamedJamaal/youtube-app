import { Container } from 'react-bootstrap';
import './_app.scss';
import Header from './components/header/Header';
import HomeScreen from './screens/homeScreens/HomeScreen';
import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import LoginScreen from './components/loginScreen/LoginScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  // search page auth

  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      history('/auth');
    }
  }, [accessToken, loading, history]);

  // toggle list
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container ">
        <Sidebar handleToggleSidebar={handleToggleSidebar} sidebar={sidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        ></Route>
        <Route path="/auth" element={<LoginScreen />}></Route>
        <Route
          path="/search"
          element={
            <Layout>
              <SearchScreen />
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
