import React from "react";
import { Route, Switch } from "react-router-dom";
import "../App.scss";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import SingleArticle from "./SingleArticle";

import { localStorageUser, userUrl } from "../utils/constant";
import NewPost from "./NewPost";
import FullPageSpinner from "./FullPageSpinner";
import Nomatch from "./Nomatch";
import Setting from "./Setting";

import Profile from "./Profile";

class App extends React.Component {
  state = {
    isLogedInUser: false,
    user: null,
    isVerifying: true,
  };

  componentDidMount() {
    let storageKey = localStorage[localStorageUser];
    if (storageKey) {
      fetch(userUrl, {
        method: "GET",
        headers: {
          authorization: `Token ${storageKey}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then(({ errors }) => {
            return Promise.reject(errors);
          });
        })
        .then(({ user }) => {
          this.isLogedInUser(user);
        })
        .catch((errors) => {
          console.log(errors);
        });
    } else {
      this.setState({
        isVerifying: false,
      });
    }
  }

  isLogedInUser = (user) => {
    this.setState({
      isLogedInUser: true,
      user,
      isVerifying: false,
    });
    localStorage.setItem(localStorageUser, user.token);
  };

  render() {
    const { isLogedInUser, user, isVerifying } = this.state;
    if (isVerifying) {
      return <FullPageSpinner />;
    }
    return (
      <>
        <Header user={user} isLogedInUser={isLogedInUser} />
        <Switch>
          <Route path="/" exact>
            <Home user={user} isLogedInUser={isLogedInUser} />
          </Route>
          {isLogedInUser ? (
            <AuthanticatePage isLogedInUser={isLogedInUser} user={user} />
          ) : (
            <UnAuthanticatePage isLogedInUser={this.isLogedInUser} />
          )}
        </Switch>
      </>
    );
  }
}

function AuthanticatePage(props) {
  let { isLogedInUser, user } = props;
  return (
    <>
      <Route path="/new-post">
        <NewPost user={user} />
      </Route>
      <Route path="/article/:slug">
        <SingleArticle isLogedInUser={isLogedInUser} />
      </Route>
      <Route path="/setting">
        <Setting user={user} />
      </Route>
      <Route path="/profile">
        <Profile user={user} />
      </Route>
      <Route path="*">
        <Nomatch />
      </Route>
    </>
  );
}

function UnAuthanticatePage(props) {
  let { isLogedInUser } = props;
  return (
    <>
      <Route path="/login">
        <Login isLogedInUser={isLogedInUser} />
      </Route>
      <Route path="/signup">
        <SignUp isLogedInUser={isLogedInUser} />
      </Route>
      <Route path="*">
        <Nomatch />
      </Route>
    </>
  );
}

export default App;
