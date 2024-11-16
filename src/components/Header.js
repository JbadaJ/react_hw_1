import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">웹툰 장바구니</a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">프로필</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">목록</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/info">기타(개발중)</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
