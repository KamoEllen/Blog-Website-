import TopBar from "./components/topbar/TopBar";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Write from "./components/pages/write/Write";
import Single from "./components/pages/single/Single";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
