import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import UploadBook from './Uploadbook.jsx';
import ManageBooks from './ManageBooks.jsx';

const DashboardLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadBook />} />
        <Route path="/manage" element={<ManageBooks />} />

      </Routes>
    </div>
  );
};

export default DashboardLayout;
