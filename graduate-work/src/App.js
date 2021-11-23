import "./bootstrap.scss";
import "./App.scss";
import Header from "./app/components/ui/navBar/header";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./app/layouts/main";
import Login from "./app/layouts/login";
import Divider from "./app/components/ui/divider";
import About from "./app/layouts/about";
import ProductNav from "./app/components/ui/productNav";
import ContentSection from "./app/components/ui/contentSection";
import Footer from "./app/components/ui/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Divider />
      <ProductNav />
      <ContentSection />
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/sale" exact element={<Login />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/" exact element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
