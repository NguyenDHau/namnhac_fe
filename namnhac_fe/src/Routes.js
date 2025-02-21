import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidebarMenu from './component/ admin/sidebar/sidebar'
import Admin from './component/ admin/admin';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/sidebar" element={<SidebarMenu/>}/>
        <Route path="/" element={<Admin />} />
      </Routes>
  );
};

export default AppRoutes;
