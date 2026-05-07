import React, { useContext } from "react";
import AdminSidebar from "../admin_sidebar/AdminSidebar";
import AdminProduct from "../admin_product/AdminProduct";
import AdminOrder from "../admin_order/AdminOrder";
import AdminCustomer from "../admin_customer/AdminCustomer";
import AdminAddProduct from "../admin_add_product/AdminAddProduct";
import AdminUpdateProduct from "../admin_update_product/AdminUpdateProduct";
import AdminUpdateOrder from "../admin_update_order/AdminUpdateOrder";
import AdminUpdateCustomer from "../admin_update_customer/AdminUpdateCustomer";
import { Outlet } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";

const AdminLayout = () => {
  const { admin } = useContext(InforContext);
  if (!admin) {
    return <div></div>;
  }

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar></AdminSidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
