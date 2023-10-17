import React, { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import config from "../config/config";
import Dashboard from "../components/dashboard/dashboard";

const RouterComponent = () => {
    return (<BrowserRouter>
        <div>
            <Routes>
                <Route path={`${config.baseUrl}`} element={<Dashboard />} />
            </Routes>
        </div>
    </BrowserRouter>)
}
export default RouterComponent;