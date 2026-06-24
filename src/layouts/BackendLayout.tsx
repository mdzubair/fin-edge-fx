// https://demo.adminkit.io/pages-invoice

import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "../assets/backend/css/light.css";
import "../assets/backend/css/custom-dash.css";
import { Toaster } from "react-hot-toast";
import Header from "../(__backend)/components/Header";
import Sidebar from "../(__backend)/components/Sidebar";
import Footer from "../(__backend)/components/Footer";
import { useState } from "react";

const BackendLayout = () => {
  //  const [sidebarOpen, setSidebarOpen] = useState(true);
      // const [sidebarOpen, setSidebarOpen] = useState(true);
      const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  // console.log(sidebarOpen);
  
  return (
    <>
      <Helmet>
        <title>FinEdge - Dashboard</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />     

        <link
          rel="shortcut icon"
          href="/backend/img/icons/icon-48x48.png"
        />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
/>
      </Helmet>
      <Toaster position="top-right" />
      <div className="wrapper">
       
        <Sidebar sidebarOpen={sidebarOpen}/>

        <div className="main">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

          <main className="content">
            <div className="container-fluid p-0">
              <Outlet />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default BackendLayout;