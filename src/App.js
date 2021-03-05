import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Details from "./Components/Details/Details";
import Errors from "./Components/Erro/Error";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/about-us" component={About} />
        <Route path="/*" component={Errors} />
      </Switch>
    </>
  );
}

export default App;
