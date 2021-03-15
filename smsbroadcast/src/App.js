import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SMSScheduller from "./pages/SMSScheduller";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/sms-scheduller">
          <SMSScheduller />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
