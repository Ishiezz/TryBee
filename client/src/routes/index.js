import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import CategoryPage from '../pages/CategoryPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import WishlistPage from '../pages/WishlistPage';
import TryAtHomePage from '../pages/TryAtHomePage';
import TryAtHomeCartPage from '../pages/TryAtHomeCartPage';
import NotFoundPage from '../pages/NotFoundPage';
import SearchResultsPage from '../pages/SearchResultsPage';
import HelpPage from '../pages/HelpPage';
import ContactUsPage from '../pages/ContactUsPage';
import AboutUsPage from '../pages/AboutUsPage';
import FAQPage from '../pages/FAQPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsAndConditionsPage from '../pages/TermsAndConditionsPage';
import GiftCardsPage from '../pages/GiftCardsPage';
import CompareProductsPage from '../pages/CompareProductsPage';
import ReviewsPage from '../pages/ReviewsPage';
import AddressBookPage from '../pages/AddressBookPage';
import OrdersPage from '../pages/OrdersPage';
import PaymentMethodsPage from '../pages/PaymentMethodsPage';
import SecurityPage from '../pages/SecurityPage';
import NotificationsPage from '../pages/NotificationsPage';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user || !user.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Public Route Component (accessible only when not authenticated)
const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (user && user.isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }
  
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/category/:categoryId" element={<MainLayout><CategoryPage /></MainLayout>} />
      <Route path="/product/:productId" element={<MainLayout><ProductPage /></MainLayout>} />
      <Route path="/search" element={<MainLayout><SearchResultsPage /></MainLayout>} />
      <Route path="/help" element={<MainLayout><HelpPage /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactUsPage /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutUsPage /></MainLayout>} />
      <Route path="/faq" element={<MainLayout><FAQPage /></MainLayout>} />
      <Route path="/privacy" element={<MainLayout><PrivacyPolicyPage /></MainLayout>} />
      <Route path="/terms" element={<MainLayout><TermsAndConditionsPage /></MainLayout>} />
      
      {/* Auth Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <MainLayout>
              <LoginPage />
            </MainLayout>
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <MainLayout>
              <RegisterPage />
            </MainLayout>
          </PublicRoute>
        }
      />
      
      {/* Protected Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CartPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CheckoutPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <MainLayout>
              <WishlistPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/try-at-home"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TryAtHomePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/try-at-home-cart"
        element={
          <ProtectedRoute>
            <MainLayout>
              <TryAtHomeCartPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <MainLayout>
              <OrdersPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/addresses"
        element={
          <ProtectedRoute>
            <MainLayout>
              <AddressBookPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment-methods"
        element={
          <ProtectedRoute>
            <MainLayout>
              <PaymentMethodsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/security"
        element={
          <ProtectedRoute>
            <MainLayout>
              <SecurityPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <MainLayout>
              <NotificationsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/gift-cards"
        element={
          <ProtectedRoute>
            <MainLayout>
              <GiftCardsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/compare"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CompareProductsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/reviews"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ReviewsPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      
      {/* 404 Route */}
      <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes; 