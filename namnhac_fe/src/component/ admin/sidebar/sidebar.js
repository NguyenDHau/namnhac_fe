import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "./SidebarMenu.css"; // Import CSS tùy chỉnh

export default function SidebarMenu() {
  const [visible, setVisible] = useState(false);

  const menuItems = [
    {
      title: "Documents",
      items: [
        { label: "New", icon: "pi pi-plus", shortcut: "Ctrl+N" },
        { label: "Search", icon: "pi pi-search", shortcut: "Ctrl+S" },
      ],
    },
    {
      title: "Profile",
      items: [
        { label: "Settings", icon: "pi pi-cog", shortcut: "Ctrl+O" },
        { label: "Messages", icon: "pi pi-inbox", badge: 2 },
        { label: "Logout", icon: "pi pi-sign-out", shortcut: "Ctrl+Q" },
      ],
    },
  ];

  return (
    <div>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="custom-sidebar"
      >
        <h2 className="menu-title">
          <i className="pi pi-bars" style={{ marginRight: "8px" }}></i>
          <span className="menu-text">Năm Nhạc</span>
        </h2>
        <ul className="menu-list">
          {menuItems.map((section, index) => (
            <div key={index}>
              <h3 className="menu-section">{section.title}</h3>
              {section.items.map((item, idx) => (
                <li key={idx} className="menu-item">
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                  {item.badge && <Badge value={item.badge} className="badge" />}
                  {item.shortcut && (
                    <span className="shortcut">{item.shortcut}</span>
                  )}
                </li>
              ))}
            </div>
          ))}
        </ul>

        <div className="user-profile">
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
          />
          <div>
            <span className="user-name">Duy Hậu</span>
            <span className="user-role">Nguyễn</span>
          </div>
        </div>
      </Sidebar>

      <Button
        icon="pi pi-bars"
        className="menu-toggle"
        onClick={() => setVisible(true)}
      />
    </div>
  );
}
