import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeLogo from '../imgs/Home_Logo.png';
import logo from '../imgs/Logo.png';
import '../styles/Page6.css';

function Page6() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedAge, selectedPart, selectedSubPart, selectedDetail, additionalInfo } = location.state || {};

  return (
    <div className="page6-container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <button className="home-button" onClick={() => navigate('/')}>
          <img src={HomeLogo} alt="Home" className="home-logo" />
          Home
        </button>
      </div>
      <div className="content">
        <h1>Diagnostic results</h1>
        <div className="results-box">
          <p><strong>Age Group:</strong> {selectedAge}</p>
          <p><strong>Selected Part:</strong> {selectedPart}</p>
          <p><strong>Selected Sub-Part:</strong> {selectedSubPart}</p>
          <p><strong>Selected Detail:</strong> {selectedDetail}</p>
          <p><strong>Additional Information:</strong> {additionalInfo}</p>
        </div>
      </div>
      <footer className="footer">
        <h5>Tag-Doctor</h5>
      </footer>
    </div>
  );
}

export default Page6;