import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/ admin/dashboard/dashboard';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
  );
};

export default AppRoutes;
