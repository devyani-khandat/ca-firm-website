import caLogo from "../assets/ca-logo.jpeg";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setInsightsOpen(false);
  };

  const toggleInsights = () => {
    setInsightsOpen((current) => !current);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo / Firm Name */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src={caLogo}
            alt="JVCL & Co. LLP"
            className="brand-logo"
          />

          <span className="brand-text">
            <span className="brand-name">
              JVCL &amp; Co. LLP
            </span>

            <span className="brand-subtitle">
              CHARTERED ACCOUNTANTS
            </span>
          </span>
        </Link>


        {/* =================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav className="desktop-nav">

          <Link to="/about">About</Link>

          <Link to="/services">Services</Link>

          <Link to="/approach">Approach</Link>

          <Link to="/industries">Industries</Link>

          <Link to="/team">Team</Link>


          {/* Insights Dropdown */}
          <div
            className={`nav-dropdown ${
              insightsOpen ? "open" : ""
            }`}
          >

            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={toggleInsights}
              aria-expanded={insightsOpen}
            >
              <span>Insights</span>

              <ChevronDown
                size={13}
                strokeWidth={1.4}
                className="nav-dropdown-icon"
              />
            </button>


            <div className="nav-dropdown-menu">

              <Link
                to="/insights/blogs"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  01
                </span>

                <span className="dropdown-label">
                  Blogs
                </span>
              </Link>


              <Link
                to="/insights/articles"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  02
                </span>

                <span className="dropdown-label">
                  Articles
                </span>
              </Link>


              <Link
                to="/insights/publications"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  03
                </span>

                <span className="dropdown-label">
                  Publications
                </span>
              </Link>


              <Link
                to="/insights/union-budget"
                onClick={closeMenu}
              >
                <span className="dropdown-number">
                  04
                </span>

                <span className="dropdown-label">
                  Union Budget
                </span>
              </Link>

            </div>

          </div>


          <Link to="/careers">Careers</Link>

          <Link
            to="/contact"
            className="nav-contact"
          >
            Contact
          </Link>

        </nav>


        {/* =================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          className={`menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>


      {/* =================================
          MOBILE NAVIGATION
      ================================= */}

      <div
        className={`mobile-nav ${
          menuOpen ? "open" : ""
        }`}
      >

        <Link
          to="/about"
          onClick={closeMenu}
        >
          About
        </Link>


        <Link
          to="/services"
          onClick={closeMenu}
        >
          Services
        </Link>


        <Link
          to="/approach"
          onClick={closeMenu}
        >
          Our Approach
        </Link>


        <Link
          to="/industries"
          onClick={closeMenu}
        >
          Industries
        </Link>


        <Link
          to="/team"
          onClick={closeMenu}
        >
          Team &amp; Partners
        </Link>


        {/* Mobile Insights */}
        <div
          className={`mobile-insights ${
            insightsOpen ? "open" : ""
          }`}
        >

          <button
            type="button"
            className="mobile-insights-trigger"
            onClick={toggleInsights}
            aria-expanded={insightsOpen}
          >
            <span>Insights</span>

            <ChevronDown
              size={16}
              strokeWidth={1.4}
              className="mobile-insights-icon"
            />
          </button>


          <div className="mobile-insights-menu">

            <Link
              to="/insights/blogs"
              onClick={closeMenu}
            >
              <span>01</span>
              Blogs
            </Link>


            <Link
              to="/insights/articles"
              onClick={closeMenu}
            >
              <span>02</span>
              Articles
            </Link>


            <Link
              to="/insights/publications"
              onClick={closeMenu}
            >
              <span>03</span>
              Publications
            </Link>


            <Link
              to="/insights/union-budget"
              onClick={closeMenu}
            >
              <span>04</span>
              Union Budget
            </Link>

          </div>

        </div>


        <Link
          to="/careers"
          onClick={closeMenu}
        >
          Careers
        </Link>


        <Link
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </Link>

      </div>
    </header>
  );
}

export default Navbar;