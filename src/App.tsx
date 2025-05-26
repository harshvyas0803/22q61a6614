import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockPage from './components/stockPage';
import CorrelationHeatmap from './components/CorrelationHeatmap';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Stock Price Aggregation</h1>
          <nav>
            <a href="/">Stock Page</a> | <a href="/heatmap">Correlation Heatmap</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<StockPage />} />
          <Route path="/heatmap" element={<CorrelationHeatmap />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;