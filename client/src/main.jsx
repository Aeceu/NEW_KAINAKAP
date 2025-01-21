import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext.jsx";
import { AccessibilityProvider } from "./context/AccessibilityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <UserProvider>
      <AccessibilityProvider>
        <Router>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </Router>
      </AccessibilityProvider>
    </UserProvider>
  </React.StrictMode>,
);
