import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home_page/HomePage";
import ShoesPage from "./components/shoes_page/ShoesPage";
import LoginForm from "./components/login_form/LoginForm";
import LoginPage from "./components/login_page/LoginPage";
import RegisterPage from "./components/register_page/RegisterPage";
import CartPage from "./components/cart_page/CartPage";
import AddToCartFormPopup from "./components/popup/AddToCartFormPopup";
import NoficationPopup from "./components/popup/NoficationPopup";
import DetailPage from "./components/detail_page/DetailPage";
import AdminPage from "./components/admin_page/AdminPage";
import ChoosenPopup from "./components/popup/ChoosenPopup";
import MainLayout from "./components/main_layout/MainLayout";
import "./App.css";
import AdminProduct from "./components/admin_product/AdminProduct";
import AdminOrder from "./components/admin_order/AdminOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="/men" element={<ShoesPage></ShoesPage>}></Route>
          <Route path="/women" element={<ShoesPage></ShoesPage>}></Route>
        </Route>
        <Route
          path={"/register"}
          element={<RegisterPage></RegisterPage>}
        ></Route>
        <Route path={"/login"} element={<LoginPage></LoginPage>}></Route>
        <Route path={"/cart"} element={<CartPage></CartPage>}></Route>
        {/* <AddToCartFormPopup></AddToCartFormPopup> */}
        {/* <NoficationPopup></NoficationPopup> */}
        {/* <ChoosenPopup></ChoosenPopup> */}
        <Route path="/detail:id" element={<DetailPage></DetailPage>}></Route>
        <Route path={"/admin"} element={<AdminPage></AdminPage>}>
          <Route index element={<AdminProduct></AdminProduct>}></Route>
          <Route
            path={"/admin/order"}
            element={<AdminOrder></AdminOrder>}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
