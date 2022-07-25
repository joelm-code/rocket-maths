import React from 'react';
import TopBar from './layouts/Header';
import Calculator from './pages/Calculator';
import SplittingPage from './pages/SplittingPage';

import './styles.css';

export default function App() {
    return (
        <div className="app--container">
            <TopBar />
            <Calculator />
        </div>
    );
}
