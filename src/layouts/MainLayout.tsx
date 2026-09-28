import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="site-wrapper">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              JVCL &amp; Co. LLP
            </Link>

            <span className="footer-subtitle">
              CHARTERED ACCOUNTANTS
            </span>

            <p className="footer-description">
              A thoughtful approach to accounting,
              taxation, compliance and advisory.
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-heading">
              EXPLORE
            </span>

            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/approach">Approach</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/team">Team</Link>
          </div>

          <div className="footer-column">
            <span className="footer-heading">
              INSIGHTS
            </span>

            <Link to="/insights/blogs">Blogs</Link>
            <Link to="/insights/articles">Articles</Link>
            <Link to="/insights/publications">
              Publications
            </Link>
            <Link to="/insights/union-budget">
              Union Budget
            </Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="footer-column footer-contact">
            <span className="footer-heading">
              CONTACT
            </span>

            <a href="mailto:info@example.com">
              <Mail size={14} strokeWidth={1.2} />
              info@example.com
            </a>

            <a href="tel:+910000000000">
              <Phone size={14} strokeWidth={1.2} />
              +91 00000 00000
            </a>

            <span className="footer-location">
              <MapPin size={14} strokeWidth={1.2} />
              Office address coming soon
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 JVCL &amp; Co. LLP. All rights reserved.
          </span>

          <Link to="/contact" className="footer-contact-link">
            <span>GET IN TOUCH</span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.2}
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;