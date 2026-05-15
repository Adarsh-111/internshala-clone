import React from "react";

export default function Header({ count }) {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-text">INTERNSHALA</span>
          </div>

          <nav className="nav-links">
            <button className="nav-btn">Internships</button>
            <button className="nav-btn">Jobs</button>
            <button className="nav-btn">Courses</button>
          </nav>

          <div className="header-actions">
            <button className="btn-login">Login</button>
            <button className="btn-register">Register</button>
          </div>
        </div>
      </header>

      <section className="search-hero">
        <h2>{count} Total Internships</h2>
        <p>Latest summer internships in India</p>
      </section>
    </>
  );
}