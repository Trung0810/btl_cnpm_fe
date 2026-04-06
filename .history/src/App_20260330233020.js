import { Fragment } from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
