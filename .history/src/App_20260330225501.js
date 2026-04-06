import { Fragment } from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import "./App.css";
import Footer from "./components/footer/Footer";
import ShoesList from "./components/shoes_list/ShoesList";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <ShoesList title="Trending"></ShoesList>
      <ShoesList title="Best seller"></ShoesList>
      <ShoesList title="On sale"></ShoesList>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
