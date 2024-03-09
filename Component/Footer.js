import React from 'react';

const Footer = () => {
  return (
    <div>

      <footer className="footer bg-dark text-white py-3" 
      style={{ position: 'fixed', bottom: '0', width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>All Right Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
