
import './App.css';
import Navigation from './components/shared/Navigation/Navigation.jsx';
import Home from './pages/Home/Home.jsx';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Authenticate from './pages/Authenticate/Authenticate.jsx';
import Activate from './pages/Activate/Activate.jsx';
import Rooms from './pages/Rooms/Rooms.jsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh.js';
import Loader from './components/shared/Loader/Loader.js';
const App = () => {
  const {loading}=useLoadingWithRefresh()
  // const navigate=useNavigate()
 
  return loading ? <Loader message="Loading... please wait" /> :(
    <Router>
      <Navigation />
      <Switch>
        <GuestRoute path="/" exact>
          <Home />
        </GuestRoute>
        <GuestRoute path="/authenticate">
          <Authenticate />
        </GuestRoute>
        <SemiProtectedRoute path="/activate">
          <Activate />
        </SemiProtectedRoute>
<ProtectedRoute path='/rooms'>
    <Rooms/>
</ProtectedRoute>
        {/* <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route> */}
      </Switch>
    </Router>
     
  )
  
}



export default App
// const isAuth = false
// const user={
//   activated:true
// }
const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);
  
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: '/rooms',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/rooms',
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          <Redirect
            to={{
              pathname: '/activate',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};