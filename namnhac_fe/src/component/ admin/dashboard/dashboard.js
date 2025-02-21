import React, { useState } from 'react';
import { Button } from 'primereact/button';

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <aside
      className={`sidebar fixed left-0 top-0 z-9999 flex h-screen ${sidebarToggle ? 'translate-x-0 lg:w-[90px]' : '-translate-x-full'} w-[290px] flex-col overflow-y-hidden border-r border-gray-200 bg-white px-5 dark:border-gray-800 dark:bg-black lg:static lg:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className={`flex items-center gap-2 pt-8 sidebar-header pb-7 ${sidebarToggle ? 'justify-center' : 'justify-between'}`}>
        <a href="index.html">
          <span className={`logo ${sidebarToggle ? 'hidden' : ''}`}>
            <img className="dark:hidden" src="./images/logo/logo.svg" alt="Logo" />
            <img className="hidden dark:block" src="./images/logo/logo-dark.svg" alt="Logo" />
          </span>
          <img className={`logo-icon ${sidebarToggle ? 'lg:block' : 'hidden'}`} src="./images/logo/logo-icon.svg" alt="Logo" />
        </a>
      </div>
      {/* Sidebar Header */}

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        {/* Sidebar Menu */}
        <nav>
          {/* Menu Group */}
          <div>
            <h3 className="mb-4 text-xs uppercase leading-[20px] text-gray-400">
              <span className={`menu-group-title ${sidebarToggle ? 'lg:hidden' : ''}`}>MENU</span>
            </h3>

            <ul className="flex flex-col gap-4 mb-6">
              {/* Menu Item Dashboard */}
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelected(selected === 'Dashboard' ? '' : 'Dashboard');
                  }}
                  className={`menu-item group ${selected === 'Dashboard' ? 'menu-item-active' : 'menu-item-inactive'}`}
                >
                  <svg className={`menu-item-icon ${selected === 'Dashboard' ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG Path Here */}
                  </svg>
                  <span className={`menu-item-text ${sidebarToggle ? 'lg:hidden' : ''}`}>Dashboard</span>
                </a>

                {/* Dropdown Menu */}
                {selected === 'Dashboard' && (
                  <div className="overflow-hidden transform translate">
                    <ul className={`flex flex-col gap-1 mt-2 menu-dropdown pl-9 ${sidebarToggle ? 'lg:hidden' : ''}`}>
                      <li>
                        <a href="index.html" className={`menu-dropdown-item group ${selected === 'ecommerce' ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`}>eCommerce</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Additional Menu Items */}
              {/* Repeat similar structure for Calendar, Profile, Forms, etc. */}
            </ul>
          </div>

          {/* Others Group */}
          <div>
            <h3 className="mb-4 text-xs uppercase leading-[20px] text-gray-400">
              <span className={`menu-group-title ${sidebarToggle ? 'lg:hidden' : ''}`}>others</span>
            </h3>

            <ul className="flex flex-col gap-4 mb-6">
              {/* Menu Item Charts */}
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelected(selected === 'Charts' ? '' : 'Charts');
                  }}
                  className={`menu-item group ${selected === 'Charts' ? 'menu-item-active' : 'menu-item-inactive'}`}
                >
                  <svg className={`menu-item-icon ${selected === 'Charts' ? 'menu-item-icon-active' : 'menu-item-icon-inactive'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG Path Here */}
                  </svg>
                  <span className={`menu-item-text ${sidebarToggle ? 'lg:hidden' : ''}`}>Charts</span>
                </a>

                {/* Dropdown Menu */}
                {selected === 'Charts' && (
                  <div className="overflow-hidden transform translate">
                    <ul className={`flex flex-col gap-1 mt-2 menu-dropdown pl-9 ${sidebarToggle ? 'lg:hidden' : ''}`}>
                      <li>
                        <a href="line-chart.html" className={`menu-dropdown-item group ${selected === 'lineChart' ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`}>Line Chart</a>
                      </li>
                      <li>
                        <a href="bar-chart.html" className={`menu-dropdown-item group ${selected === 'barChart' ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}`}>Bar Chart</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* Repeat for other menu items like UI Elements, Authentication, etc. */}
            </ul>
          </div>
        </nav>
        {/* Sidebar Menu */}

        {/* Promo Box */}
        <div className={`mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03] ${sidebarToggle ? 'lg:hidden' : ''}`}>
          <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">#1 Tailwind CSS Dashboard</h3>
          <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">Leading Tailwind CSS Admin Template with 400+ UI Component and Pages.</p>
          <a href="https://tailadmin.com/pricing" target="_blank" rel="nofollow" className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600">Purchase Plan</a>
        </div>
        {/* Promo Box */}
      </div>
    </aside>
  );
};

export default Dashboard;
