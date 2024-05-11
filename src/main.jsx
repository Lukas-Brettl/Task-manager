import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/Home.jsx';
import You from './pages/You.jsx';
import CalendarV2 from "./pages/CalendarV2.jsx"
import './index.css';

const root = createRoot(document.getElementById('root')); // Create a root container
root.render(
    <BrowserRouter>
        <Routes> {/* Use Routes instead of Route */}
            <Route path="you" element={<You />}/>
            <Route path="calendar" element={<CalendarV2 />}/>
            <Route index element={<Home />} />
           
        </Routes>
    </BrowserRouter>
);
