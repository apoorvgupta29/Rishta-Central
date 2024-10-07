import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import ListingPage from './pages/ListingPage';
import ProfileDetailsPage from './pages/ProfileDetailsPage';
import CreateProfilePage from './pages/CreateProfilePage';
import FAQsPage from './pages/FAQsPage';
import PaymentsAndSupportPage from './pages/PaymentsAndSupportPage';
import SettingsPage from './pages/SettingsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
          <Navbar />
          <main className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/listings" element={<ListingPage />} />
              <Route path="/profile/:id" element={<ProfileDetailsPage />} />
              <Route path="/create-profile" element={<CreateProfilePage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/payments-support" element={<PaymentsAndSupportPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;