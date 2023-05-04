import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Users from "./components/Users/Users.js";
import "./App.css";
import axios from "axios";
import User from "./components/Users/User.js";
import Search from "./components/Users/Search.js";
import Alert from "./components/layout/Alert.js";
import About from "./components/layout/pages/About.js";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };
  // async componentDidMount() {
  //   this.setState({ users: [], loading: false });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  getUser = async (username) => {
    username = this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };
  clearUser = () => {
    this.setState({ users: [], loading: false });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading, user } = this.state;
    const { searchUsers, clearUser, setAlert, getUser } = this;
    return (
      <Router>
        <div className="App">
          <Navbar icon="fab fa-github" title="Github Finder" />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUser={clearUser}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlert}
                    />
                    <Users Users={users} loading={loading} />
                  </Fragment>
                }
                render={(props) => {
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUser={clearUser}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlert}
                    />
                    <Users Users={users} loading={loading} />
                  </Fragment>;
                }}
              />
              <Route exact path="/About" element={<About />} />
              <Route
                exact
                path="/User/:login" //this :login is the param(diff for diff users) being passed to the user component
                element={<User />}
                render={(props) => {
                  <User
                    {...props}
                    getUser={getUser.bind(this)}
                    user={user}
                    loading={loading}
                  />;
                }}
              />
            </Routes>

            <Alert alert={this.state.alert} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
