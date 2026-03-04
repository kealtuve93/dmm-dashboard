import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AccountDetail from './pages/AccountDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounts/:id" element={<AccountDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
