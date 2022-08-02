import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH_NAMES } from './constants/pathNames';
import { Home } from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATH_NAMES.INICIO} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
