import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH_NAMES } from './constants/pathNames';
import { Home } from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={PATH_NAMES.INICIO} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
