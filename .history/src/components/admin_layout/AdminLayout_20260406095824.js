import React from "react";
import AdminSidebar from "../admin_sidebar/AdminSidebar";
import AdminProduct from "../admin_product/AdminProduct";
import AdminOrder from "../admin_order/AdminOrder";
import AdminCustomer from "../admin_customer/AdminCustomer";
import AdminAddProduct from "../admin_add_product/AdminAddProduct";
import AdminUpdateProduct from "../admin_update_product/AdminUpdateProduct";
import AdminUpdateOrder from "../admin_update_order/AdminUpdateOrder";
import AdminUpdateCustomer from "../admin_update_customer/AdminUpdateCustomer";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar></AdminSidebar>
      {/* <AdminProduct></AdminProduct> */}
      <AdminAddProduct></AdminAddProduct>
      {/* <AdminUpdateProduct></AdminUpdateProduct> */}
      {/* <AdminOrder></AdminOrder> */}
      {/* <AdminUpdateOrder></AdminUpdateOrder> */}
      {/* <AdminCustomer></AdminCustomer> */}
      {/* <AdminUpdateCustomer></AdminUpdateCustomer> */}
    </div>
  );
};

export default AdminLayout;
