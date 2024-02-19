import React, { useState } from 'react';
import {Outlet, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';

function App() {
    
    return (
        <>
                <Outlet />
        </>
    )
}

export default App;