import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Login from "./pages.login/Login";
import Home from "./components/pages/home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import Login from "./pages/login/Login";

export default function App() {
  const user = false;
  return (
    <Router>
    <TopBar/>
    <Switch>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route path="/register">{ user ? <Home/> :<Register/>}</Route>
      <Route path="/"login>{user ? <Home/> :<Login/>}</Route>
      <Route path="/write">{user ? <Write/> :<Register/>}</Route>
      <Route path="/settings">{user ? <Settings/> : <Register/>}<Route/>
      <Route path="/post/:postId">
        <Single/>
      </Route>
      </Route>
      </Switch>
    </Router>

import TopBar from "./components/topbar/TopBar";
import Single from "./single/Single";

export default function App() {
  return (
    <>
    <TopBar/>
    <Single/>


import Home from "./pages/home/Home";



import TopBar from "./topbar/TopBar";

function App() {
  return (
    <>
    <TopBar/>
    <Home/>



    </>


  );
}





export default App;


