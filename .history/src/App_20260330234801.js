import { Fragment } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home_page/HomePage";
import ManShoesPage from "./components/man_shoes_page/ManShoesPage";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <HomePage></HomePage>
      {/* <ManShoesPage></ManShoesPage> */}
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
