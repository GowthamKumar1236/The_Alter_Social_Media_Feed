import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { auth } from './services/api';

const App = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Setting the authenticated user in the AuthContext or state
      } else {
        // Setting the state to null if not authenticated
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional loading screen
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
