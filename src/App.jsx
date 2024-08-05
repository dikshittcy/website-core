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
