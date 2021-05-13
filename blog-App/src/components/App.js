import { Route, Switch } from "react-router-dom";
import "../App.scss";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import SingleArticle from "./SignleArticle";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/article/:slug" component={SingleArticle} />
      </Switch>
    </>
  );
}

export default App;
