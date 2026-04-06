import React from "react";
import AdminSidebar from "../admin_sidebar/AdminSidebar";
import AdminProduct from "../admin_product/AdminProduct";
import AdminOrder from "../admin_order/AdminOrder";
import AdminCustomer from "../admin_customer/AdminCustomer";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar></AdminSidebar>
      {/* <AdminProduct></AdminProduct> */}
      <AdminOrder></AdminOrder>
      {/* <AdminCustomer></AdminCustomer> */}
    </div>
  );
};

export default AdminLayout;
