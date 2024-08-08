import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/global/navbar/Navbar';
import Home from "./components/home/Home";
import Footer from './components/global/footer/Footer';
import Copyright from './components/global/copyright/Copyright';
import SEO from './components/services/seo/hero/SEO.jsx';
import DigitalMarketing from "./components/services/digital-marketing/hero/DigitalMarketing.jsx";
import UIUX from "./components/services/uiux/hero/UIUX.jsx";
import AppDevelopment from "./components/services/app-developement/hero/AppDevelopment.jsx";
import WebDevelopment from "./components/services/web-development/hero/WebDevelopment.jsx";
import GenerativeAIProducts from "./components/services/generative-ai-products/hero/GenerativeAIProducts.jsx";
import AboutUs from "./components/about/hero/AboutUs.jsx";
import ContactUs from "./components/contact/hero/ContactUs.jsx";


function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar/>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/seo" element={<SEO/>}/>
                        <Route path="/digital-marketing" element={<DigitalMarketing/>}/>
                        <Route path="/uiux" element={<UIUX/>}/>
                        <Route path="/app-dev" element={<AppDevelopment/>}/>
                        <Route path="/web-dev" element={<WebDevelopment/>}/>
                        <Route path="/ai-products" element={<GenerativeAIProducts/>}/>
                        <Route path="/about-us" element={<AboutUs/>}/>
                        <Route path="/contact-us" element={<ContactUs/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </main>
                <Footer/>
                <Copyright/>
            </div>
        </Router>
    );
}

export default App;
