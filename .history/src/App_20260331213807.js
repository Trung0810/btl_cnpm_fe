import { Fragment } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home_page/HomePage";
import ShoesPage from "./components/shoes_page/ShoesPage";
import LoginForm from "./components/login_form/LoginForm";
import LoginPage from "./components/login_page/LoginPage";
import RegisterPage from "./components/register_page/RegisterPage";
import "./App.css";
import CartPage from "./components/cart_page/CartPage";
import AddToCartFormPopup from "./components/popup/AddToCartFormPopup";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <HomePage></HomePage>
      {/* <ShoesPage></ShoesPage> */}
      <Footer></Footer>
      {/* <LoginPage></LoginPage> */}
      {/* <RegisterPage></RegisterPage> */}
      {/* <CartPage></CartPage> */}
      <AddToCartFormPopup></AddToCartFormPopup>
    </Fragment>
  );
}

export default App;
