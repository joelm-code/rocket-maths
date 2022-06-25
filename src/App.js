import React from 'react';
import TopBar from './components/TopBar';
import CalculatorPage from './pages/CalculatorPage';

import './styles.css';

export default function App() {
    return (
        <div className="app--container">
            <TopBar />
            <CalculatorPage />
        </div>
    );
}
