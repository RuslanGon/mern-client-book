import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Uploadbook from './Uploadbook.jsx';

const DashboardLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Uploadbook />} />

      </Routes>
    </div>
  );
};

export default DashboardLayout;
