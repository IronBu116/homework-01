import "../bootstrap.scss";
import "../App.scss";
import Header from "./components/ui/navBar/header";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Divider from "./components/ui/divider";
import About from "./layouts/about";
import Footer from "./components/ui/footer/footer";
import { CategoryProvider } from "./components/hook/useCategories";
import { BrandProvider } from "./components/hook/useBrands";

function App() {
  return (
    <>
      <Header />
      <Divider />{" "}
      <CategoryProvider>
        <BrandProvider>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/sale" component={Login} />
            <Route path="/products/:productId?/:edit?" component={Main} />
            <Redirect to="/products" />
          </Switch>{" "}
        </BrandProvider>
      </CategoryProvider>
      <Footer />
    </>
  );
}

export default App;
