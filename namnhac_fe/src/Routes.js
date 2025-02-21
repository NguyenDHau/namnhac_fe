import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidebarMenu from './component/ admin/sidebar/sidebar'
import Admin from './component/ admin/admin';
import Customer from './component/ admin/customer/customer'; 

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/sidebar" element={<SidebarMenu/>}/>
        <Route path="/" element={<Admin />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
  );
};

export default AppRoutes;
