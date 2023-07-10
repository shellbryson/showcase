import React from 'react';
import { Outlet } from "react-router-dom";

// Helpers
import ProtectedRoute from '../helpers/ProtectedRoute';

export default function AdminLayout() {

  return (
    <ProtectedRoute>
      <div>
        <Outlet />
      </div>
    </ProtectedRoute>
  )
}