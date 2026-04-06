import React from "react";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin</h2>
      <ul className="admin-sidebar-menu">
        <li className="admin-sidebar-item">products management</li>
        <li className="admin-sidebar-item">orders management</li>
        <li className="admin-sidebar-item">customers management</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
