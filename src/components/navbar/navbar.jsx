// src/components/navbar/navbar.jsx
import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [useTyped, setUseTyped] = useState(true);
  const [mounted, setMounted] = useState(false);

  const { theme, toggleTheme } = React.useContext(ThemeContext);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      // setUseTyped(window.innerWidth > 600);
      if (window.innerWidth > 980) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(v => !v);
  const closeMenu = () => setIsOpen(false);

  const typedStrings = ['Front-End<br/>Developer.', 'UI/UX <br/> Designer', 'Electronics<br/>Communication Engineer'];

  return (
    <header className="topbar">
      <div className="brand">
        <div className="logo-text">PK</div>
        <div className="brand-sub">
          {useTyped && mounted ? (
            <ReactTyped
              strings={typedStrings}
              typeSpeed={40}
              backSpeed={30}
              loop
              smartBackspace
              showCursor={false}
              contentType="html"
            />
          ) : (
            <span className="brand-sub-static">Front-End Developer</span>
          )}
        </div>
      </div>

      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/resume" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')} onClick={closeMenu}>Resume</NavLink>

        <div className="theme-switch">
          <input
            id="theme-toggle"
            className="toggle-input"
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === 'dark'}
            aria-label="Toggle theme"
          />
          <label htmlFor="theme-toggle" className="toggle-label" title="Toggle theme">
            <span className="sun">☀️</span>
            <span className="moon">🌙</span>
            <span className="knob" />
          </label>
        </div>
      </nav>
    </header>
  );
}