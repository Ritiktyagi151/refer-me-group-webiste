// import React, { useState, useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../common/navbar/Navbar";
// import AppSidebar from '../common/sidebar/AppSidebar';
import Footer from "../common/footer/Footer";
import SocialSidebar from "../common/SocialSidebar";
import WhatsAppWidget from "../components/WhatsAppWidget";

const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <WhatsAppWidget />
      <SocialSidebar />
      {/* Main Routes */}
      <Outlet />

      <Footer />
    </>
  );
};

export default AppLayout;
