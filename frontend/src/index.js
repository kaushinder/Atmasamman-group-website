import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";


import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import AtsPage from "./divisions/ats/AtsPage.jsx";
import AIMT from "./divisions/aimt/AimtPage.jsx";
import SignUp from "./auth/SignUp.jsx";
import Foundation from "./divisions/foundation/FoundationPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Payment from "./payment/PaymentPage.jsx";
import Contact from "./contact/ContactPage.jsx";
import ASAI from "./divisions/asai/AsaiPage.jsx";
import Footer from "./components/Footer.jsx";
import Career from "./career/CareerPage.jsx";
import Blog from "./blog/BlogPage.jsx";
import Login from "./auth/Login.jsx";
import Enroll from "./enroll/EnrollPage.jsx";
import GetInvolved from "./get-involved/GetInvolvedPage.jsx";
import ForgotPassword from "./auth/ForgotPassword.jsx";
import NotFound from "./components/NotFound.jsx";
import OpenAccount from "./pages/home/OpenAccount.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/AIMT" element={<AIMT />} />
        <Route path="/ATS" element={<AtsPage />} />
        

        <Route path="/blog" element={<Blog />} />
        <Route path="/openAccount" element={<OpenAccount />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/getInvolved" element={<GetInvolved />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ASAI" element={<ASAI />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  </BrowserRouter>
);