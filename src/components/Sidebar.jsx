// src/components/Sidebar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Detect mouse proximity to the left edge of the screen
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isOpen && event.clientX <= 50) {  // 50px from the left edge
        setIsOpen(true);
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
        {isOpen ? 'Hide' : 'Show'} Sidebar
      </button>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/profile" className="sidebar-link">Profile</Link>
        <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
