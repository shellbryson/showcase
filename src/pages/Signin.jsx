import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { getAuth, sendPasswordResetEmail } from "firebase/auth"

import { useAuth } from '../contexts/AuthContext';

// UI
import { Input, Button } from "@material-tailwind/react";

export default function Signin() {

  const navigate = useNavigate();

  // Signin
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    if (!email || !password) return;

    e.preventDefault();
    setError('');

    try {
      await signIn(email, password)
      navigate('/admin')
    } catch (e) {
      console.log(e.message);
      setError("Couldn't sign in. Please check your email and password.")
    }
  };

  const handlePasswordReset = () => {
    setSetOpenDialog(true);
  }

  return (
    <div className="container absolute z-10 px-4 inset-1 grid h-screen place-items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-72 items-end gap-2">
          <Input color="white" label="Email Address" required onChange={(e) => setEmail(e.target.value)} type='email' />
          <Input color="white" label="Password" required onChange={(e) => setPassword(e.target.value)} type='password' />
          <Button type="submit">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}
