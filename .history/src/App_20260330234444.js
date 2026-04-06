import { Fragment } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home_page/HomePage";

function App() {
  return (
    <Fragment>
      <Header></Header>
      {/* <HomePage></HomePage> */}
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
