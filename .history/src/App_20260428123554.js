import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home_page/HomePage";
import ShoesPage from "./components/shoes_page/ShoesPage";
import LoginPage from "./components/login_page/LoginPage";
import RegisterPage from "./components/register_page/RegisterPage";
import CartPage from "./components/cart_page/CartPage";
import DetailPage from "./components/detail_page/DetailPage";
import AdminPage from "./components/admin_page/AdminPage";
import MainLayout from "./components/main_layout/MainLayout";
import AdminProduct from "./components/admin_product/AdminProduct";
import AdminOrder from "./components/admin_order/AdminOrder";
import AdminCustomer from "./components/admin_customer/AdminCustomer";
import ProtectedRoute from "./components/protected_route/ProtectedRoute";
import AdminAddProduct from "./components/admin_add_product/AdminAddProduct";
import AdminUpdateProduct from "./components/admin_update_product/AdminUpdateProduct";
import AdminUpdateOrder from "./components/admin_update_order/AdminUpdateOrder";
import AdminUpdateCustomer from "./components/admin_update_customer/AdminUpdateCustomer";
import { InforContext } from "./components/infor_provider/InforProvider";
import axios from "axios";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const { setCustomer, setAdmin } = useContext(InforContext);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8888/v1/api/account",
          { headers: { Authorization: `Bearer ${token}` } },
        );
        console.log("🚀 ~ fetchData ~ response:", response);
        if (response?.data?.data?.role === "customer") {
          setCustomer(response.data.data);
        }
        if (response?.data?.data?.role === "admin") {
          setAdmin(response.data.data);
        }
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data);
        setCustomer(null);
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="men" element={<ShoesPage key={"men"}></ShoesPage>}></Route>
        <Route
          path="women"
          element={<ShoesPage key={"women"}></ShoesPage>}
        ></Route>
      </Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage></CartPage>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/detail/:id" element={<DetailPage></DetailPage>}></Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage></AdminPage>
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminProduct></AdminProduct>}></Route>
        <Route path="product" element={<AdminProduct></AdminProduct>}></Route>
        <Route
          path="add-product"
          element={<AdminAddProduct></AdminAddProduct>}
        ></Route>
        <Route
          path="update-product/:id"
          element={<AdminUpdateProduct></AdminUpdateProduct>}
        ></Route>
        <Route path="order" element={<AdminOrder></AdminOrder>}></Route>
        <Route
          path="update-order/:id"
          element={<AdminUpdateOrder></AdminUpdateOrder>}
        ></Route>
        <Route
          path="customer"
          element={<AdminCustomer></AdminCustomer>}
        ></Route>
        <Route
          path="update-customer/:id"
          element={<AdminUpdateCustomer></AdminUpdateCustomer>}
        ></Route>
        <Route></Route>
      </Route>
    </Routes>
  );
}

export default App;
