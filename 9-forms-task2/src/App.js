import "./App.css";
import StudentCard from "./components/studentCard";
import { Route, Switch, Redirect } from "react-router-dom";
import NotExicted from "./components/NotExicted";
import InputForm from "./components/inputForm";

function App() {
  return (
    <>
      <Switch>
        <Route path="/inputForm" component={InputForm} />
        <Route path="/student" exact component={StudentCard} />
        <Route path="/" component={NotExicted} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
