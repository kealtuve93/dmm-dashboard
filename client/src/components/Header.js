import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section">
          <Music className="logo-icon" />
          <div className="logo-text">
            <h1 className="logo-title">Dance Motion Dashboard</h1>
            <p className="logo-subtitle">Powered by Dance Motion Marketing</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
