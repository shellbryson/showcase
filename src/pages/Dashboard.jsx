import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import { Button } from "@material-tailwind/react";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <Link to='/dashboard/events'>Edit events</Link>
      <Link to='/dashboard/map'>Edit map</Link>
      <Link to='/dashboard/links'>Edit links</Link>
      <Link to='/dashboard/pages'>Edit pages</Link>
      <Button onClick={handleLogout}>
        Sign out
      </Button>
    </div>
  );
};

export default Dashboard;