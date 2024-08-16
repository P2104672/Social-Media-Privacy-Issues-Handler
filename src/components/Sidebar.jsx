// src/components/Sidebar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientX <= 20) {
        setIsOpen(true);
      } else if (!isOpen && event.clientX > 250) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
        <Link to="/profile" className="sidebar-link">
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </Link>
        <Link to="/dashboard" className="sidebar-link">
          <FontAwesomeIcon icon={faChartBar} />
          <span>Dashboard</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;