import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import UploadBook from './Uploadbook.jsx';
import ManageBooks from './ManageBooks.jsx';
import EditBooks from './EditBooks.jsx';
import SideBar from './SideBar.jsx';
import UserBook from './UserBook.jsx';
import ProductBook from './ProductBook.jsx';

const DashboardLayout = () => {
  return (
     <div className="flex gap-4 flex-col md:flex-row -mt-15 ">
      <SideBar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<UploadBook />} />
          <Route path="/manage" element={<ManageBooks />} />
          <Route path="/edit-books/:id" element={<EditBooks />} />
          <Route path="/users" element={<UserBook />} />
          <Route path="/products" element={<ProductBook />} />


        </Routes>
      </main>
    </div>
  );
};

export default DashboardLayout;
