import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <i className="bi bi-newspaper"></i> NewsApp
        </Link>

        {/* Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-globe-asia-australia"></i> World
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                <i className="bi bi-tv-fill"></i> Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                <i className="fas fa-football-ball"></i> Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                <i className="fas fa-laptop-code"></i> Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                <i className="bi bi-rocket"></i> Science
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
