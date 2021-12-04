import "./bootstrap.scss";
import "./App.scss";
import Header from "./app/components/ui/navBar/header";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./app/layouts/main";
import Login from "./app/layouts/login";
import Divider from "./app/components/ui/divider";
import About from "./app/layouts/about";
import Footer from "./app/components/ui/footer/footer";

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
