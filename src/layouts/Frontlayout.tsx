import { Outlet, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../assets/css/custom-chatgpt.css";

import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../(__frontend)/components/Header";
import Footer from "../(__frontend)/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const FrontLayout = () =>{
    const location = useLocation(); // ✅ for re-init on route change
    useEffect(()=>{
        // ✅ Make jQuery global (needed for plugins)
        (window as any).$ = $;
        (window as any).jQuery = $;
        // ✅ Init AOS
        AOS.init({ duration: 1000,  once: true,  easing: "ease-in-out",});       
        AOS.refreshHard(); // 🔥 better than setTimeout
    }, [location.pathname])
    
    return(
        <>
            <Helmet>
                <title>Fin Edge FX</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* ✅ Keep only ONE Font Awesome */}
                {/* <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                /> */}
            </Helmet>
            <Toaster position="top-right" />
            {/* {(location.pathname != "/login" || location.pathname != "/register")?<Header />:null} */}
            {location.pathname !== "/broker-login" && location.pathname !== "/login" && location.pathname !== "/register" && (<Header /> )}
            <Outlet />
            {location.pathname !== "/broker-login" && location.pathname !== "/login" && location.pathname !== "/register" && (<Footer /> )}
        </>
    )
}
export default FrontLayout;