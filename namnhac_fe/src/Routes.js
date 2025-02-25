import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidebarMenu from './component/ admin/sidebar/sidebar'
import Admin from './component/ admin/admin';
import Customer from './component/ admin/customer/customer';
import ListProduct from './component/ admin/product/listProduct';
// import ProductSidebar from './component/ admin/product/productSidebar/productSidebar';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/sidebar" element={<SidebarMenu/>}/>
        <Route path="/" element={<Admin />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<ListProduct />} />
        {/* <Route path="/productSidebar" element={<ProductSidebar />} /> */}
      </Routes>
  );
};

export default AppRoutes;
