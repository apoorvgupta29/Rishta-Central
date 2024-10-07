import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function LandingPage() {
  const { currentUser, signInWithGoogle, logout } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/listings');
    } catch (error) {
      console.error("Failed to sign in with Google", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to Rishta Central</h1>
      
      {currentUser ? (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <img 
            src={currentUser.photoURL || 'https://via.placeholder.com/100'} 
            alt="Profile" 
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {currentUser.displayName || currentUser.email}!</h2>
          <p className="text-gray-600 mb-6">You're logged in and ready to explore.</p>
          <div className="space-y-4">
            <Link
              to="/listings"
              className="block w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200"
            >
              Browse Profiles
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            onClick={handleGoogleSignIn}
            className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-200"
          >
            Sign in with Google
          </button>
          <Link
            to="/listings"
            className="block text-center bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-gray-800 transition duration-200"
          >
            Browse Profiles
          </Link>
        </div>
      )}
    </div>
  );
}

export default LandingPage;