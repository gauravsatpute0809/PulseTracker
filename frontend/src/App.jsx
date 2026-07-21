import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />
        <Route 
        path="/products" 
        element={<Products />} />

        <Route 
        path="/customers" 
        element={<Customers />} />

        <Route 
        path="/orders" 
        element={<Orders />} />

        <Route 
        path="/reports" 
        element={<Reports />} />

        <Route 
        path="/settings" 
        element={<Settings />} />

        <Route 
        path="/login" 
        element={<Login />} />

        <Route 
        path="/register" 
        element={<Register />} />

        <Route 
        path="/forgot-password" 
        element={<ForgotPassword />} />
       
        <Route 
        path="/reset-password" 
        element={<ResetPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;