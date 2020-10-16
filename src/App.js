import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reports from "./Reports";
import Scenarios from "./Scenarios";
import Login from "./Login";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Reports} />
          <PrivateRoute exact path="/reports" component={Reports} />
          <PrivateRoute exact path="/scenarios" component={Scenarios} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;