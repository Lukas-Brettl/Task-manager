import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/Home.jsx';
import You from './pages/You.jsx';
import TaskCard from "./pages/TaskCard.jsx"
import Login from "./pages/Login.jsx"
import './index.css';

const root = createRoot(document.getElementById('root')); // Create a root container
root.render(
    <BrowserRouter>
        <Routes> {/* Use Routes instead of Route */}
            <Route path="you" element={<You />}/>
            <Route path="calendar" element={<TaskCard />}/>
            <Route path="login" element={<Login />}/>
            <Route index element={<Home />} />
           
        </Routes>
    </BrowserRouter>
);