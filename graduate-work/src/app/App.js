import "../bootstrap.scss";
import "../App.scss";
import Header from "./components/ui/navBar/header";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Divider from "./components/ui/divider";
import About from "./layouts/about";
import Footer from "./components/ui/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Divider />
      <Switch>
        <Route path="/sale" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/products/:productId?/:edit?" component={Main} />
        <Redirect to="/products" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
