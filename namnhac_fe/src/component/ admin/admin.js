import React from "react";
import SidebarMenu from "./sidebar/sidebar"; // Import Sidebar đã tạo
// import "bootstrap/dist/css/bootstrap.min.css";


const Admin = ({ children }) => {
  return (
    <div className="admin-layout d-flex">
      {/* Sidebar */}
      <SidebarMenu />

      {/* Nội dung chính */}
      <div className="content p-4 w-100">
        <h1 className="mb-4"></h1>
        {children}
      </div>
    </div>
  );
};

export default Admin;
