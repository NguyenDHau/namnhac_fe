import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";

export default function SidebarMenu() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      {/* Sidebar với hiệu ứng đẹp hơn */}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="custom-sidebar"
      >
        <h2 className="text-center text-white">My Sidebar</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Sidebar>

      {/* Nút mở sidebar với icon đẹp hơn */}
      <Button
        icon="pi pi-bars"
        className="p-button-rounded p-button-primary p-button-lg shadow-lg"
        onClick={() => setVisible(true)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1000,
        }}
      />
    </div>
  );
}
