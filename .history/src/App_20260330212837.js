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
      <div style={{ height: "1000px" }}></div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
