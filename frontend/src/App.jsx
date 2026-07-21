import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Customers from "./pages/Customers";


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

      </Routes>
    </BrowserRouter>
  );
}

export default App;