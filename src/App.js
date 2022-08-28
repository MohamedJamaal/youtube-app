import { Container } from 'react-bootstrap';
import './_app.scss';
import Header from './components/header/Header';
import HomeScreen from './screens/homeScreens/HomeScreen';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import LoginScreen from './components/loginScreen/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Layout = ({ children }) => {
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
              <h1>Modify my element</h1>
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
