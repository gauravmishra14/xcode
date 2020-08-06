import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import NotFound from "components/NotFound";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Login from "components/Login";
import Dashboard from "components/Dashboard";
import Home from "components/Home";

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

const Layout = withRouter(({ location }) => {
  return (
    <div className="App">
      {location.pathname !== "/login" && location.pathname !== "/" && <Header />}
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="" component={NotFound} />
        </Switch>
      </div>
      {location.pathname !== "/login" && location.pathname !== "/" && <Footer />}
    </div>
  );
});

export default App;
