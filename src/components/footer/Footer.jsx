import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="brand">PK • Front-end Developer/UI-UX Designer/Electronics Engineer</div>
          <div className="copyright">© {new Date().getFullYear()} Prasanna Karmacharya</div>
        </div>
      </div>
    </footer>
  );
}