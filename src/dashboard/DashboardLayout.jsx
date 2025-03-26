import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import UploadBook from './Uploadbook.jsx';

const DashboardLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadBook />} />
      </Routes>
    </div>
  );
};

export default DashboardLayout;
