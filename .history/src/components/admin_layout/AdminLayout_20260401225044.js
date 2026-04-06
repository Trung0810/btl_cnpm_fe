import React from "react";
import AdminSidebar from "../admin_sidebar/AdminSidebar";
import AdminProduct from "../admin_product/AdminProduct";
import AdminOrder from "../admin_order/AdminOrder";
import AdminCustomer from "../admin_customer/AdminCustomer";
import AdminAddProduct from "../admin_add_product/AdminAddProduct";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar></AdminSidebar>
      {/* <AdminProduct></AdminProduct> */}
      <AdminAddProduct></AdminAddProduct>
      {/* <AdminOrder></AdminOrder> */}
      {/* <AdminCustomer></AdminCustomer> */}
    </div>
  );
};

export default AdminLayout;
