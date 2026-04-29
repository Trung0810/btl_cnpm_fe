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
import "./App.css";
import MainLayout from "./components/main_layout/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="/man" element={<ShoesPage></ShoesPage>}></Route>
          <Route path="/woman" element={<ShoesPage></ShoesPage>}></Route>
        </Route>
        {/* <LoginPage></LoginPage> */}
        {/* <RegisterPage></RegisterPage> */}
        {/* <CartPage></CartPage> */}
        {/* <AddToCartFormPopup></AddToCartFormPopup> */}
        {/* <NoficationPopup></NoficationPopup> */}
        {/* <ChoosenPopup></ChoosenPopup> */}
        {/* <DetailPage></DetailPage> */}
        {/* <AdminPage></AdminPage> */}
      </Routes>
    </Router>
  );
}

export default App;
