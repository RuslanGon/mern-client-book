import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import UploadBook from './Uploadbook.jsx';
import ManageBooks from './ManageBooks.jsx';
import EditBooks from './EditBooks.jsx';
import SideBar from './SideBar.jsx';

const DashboardLayout = () => {
  return (
  <>
  <SideBar />
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadBook />} />
        <Route path="/manage" element={<ManageBooks />} />
        <Route path="/edit-books/:id" element={<EditBooks />} />
      </Routes>
    </main>
  </>
  );
};

export default DashboardLayout;
