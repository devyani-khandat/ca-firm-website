import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "./home.css";

const SERVICES = [
  {
    number: "01",
    title: "Company Incorporation",
    description:
      "Independent assurance and audit services built around accuracy, transparency and trust.",
  },
  {
    number: "02",
    title: "GST Advisory",
    description:
      "Practical tax and regulatory guidance to help businesses stay compliant and prepared.",
  },
  {
    number: "03",
    title: "Tax Audits",
    description:
      "Insight-driven advice that supports informed decisions, sustainable growth and long-term value.",
  },
  {
    number: "04",
    title: "ROC Compliances",
    description:
      "Financial and strategic support through important transactions and business decisions.",
  },
];

function Home() {
  return (
    <div className="home-page">
      {/* Background artwork */}
      <div className="home-background" aria-hidden="true" />

      {/* Soft overlay to keep the text readable */}
      <div className="home-overlay" aria-hidden="true" />

      <main className="home-content">
        {/* HERO */}
        <section className="home-hero">
          <div className="hero-center">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              <span>TRUST</span>
              <span className="hero-slash">/</span>
              <span>INSIGHT</span>
              <span className="hero-slash">/</span>
              <span>PROGRESS</span>
              <span className="hero-eyebrow-line" />
            </div>

            <h1 className="hero-title">
              Numbers that build
              <br />
              <em>brighter</em> tomorrows.
            </h1>

            <p className="hero-description">
              Partnering with individuals, businesses and institutions
              <br className="desktop-break" />
              for a more confident tomorrow.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="hero-primary-button">
                <span>OUR SERVICES</span>
                <ArrowRight size={17} strokeWidth={1.6} />
              </Link>

              <Link to="/contact" className="hero-secondary-button">
                GET IN TOUCH
              </Link>
            </div>
          </div>

          {/* Bottom service navigation */}
          <div className="hero-bottom">
            <div className="service-pills">
              {SERVICES.map((service) => (
                <Link
                  to="/services"
                  className="service-pill"
                  key={service.number}
                >
                  <span className="service-number">{service.number}</span>

                  <span className="service-name">
                    {service.title.toUpperCase()}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hero-quote">
              <span className="quote-mark">“</span>
              <span>
                Clarity today.
                <br />
                Confidence tomorrow.
              </span>
            </div>

            <div className="scroll-indicator">
              <span className="scroll-text">SCROLL</span>

              <span className="scroll-line" />

              <ChevronDown
                size={18}
                strokeWidth={1.3}
                className="scroll-arrow"
              />
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="home-introduction">
          <div className="intro-label">
            <span>01</span>
            <span>ABOUT JVCL &amp; CO. LLP</span>
          </div>

          <div className="intro-content">
            <h2>
              Numbers tell a story.
              <br />
              <em>We help you understand it.</em>
            </h2>

            <div className="intro-text">
              <p>
                At JVCL &amp; Co. LLP, we believe that accounting is more than
                numbers on a page. It is about creating clarity, strengthening
                decisions and building confidence for what comes next.
              </p>

              <p>
                We work alongside individuals, businesses and institutions
                with a thoughtful approach to assurance, taxation, regulatory
                matters and business advisory.
              </p>

              <Link to="/about" className="text-link">
                <span>DISCOVER OUR FIRM</span>
                <ArrowRight size={17} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES INTRO */}
        <section className="home-services">
          <div className="services-heading">
            <div className="section-label">
              <span>02</span>
              <span>WHAT WE DO</span>
            </div>

            <h2>
              Expertise with
              <br />
              <em>purpose.</em>
            </h2>

            <p>
              From assurance and taxation to advisory and transaction support,
              our services are designed around the needs of the people and
              businesses we work with.
            </p>
          </div>

          <div className="services-list">
            {SERVICES.map((service) => (
              <Link
                to="/services"
                className="service-row"
                key={service.number}
              >
                <span className="service-row-number">{service.number}</span>

                <span className="service-row-title">{service.title}</span>

                <span className="service-row-description">
                  {service.description}
                </span>

                <span className="service-row-arrow">
                  <ArrowRight size={19} strokeWidth={1.3} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="home-closing">
          <div className="closing-inner">
            <span className="closing-label">JVCL &amp; CO. LLP</span>

            <h2>
              Built on trust.
              <br />
              <em>Driven by insight.</em>
            </h2>

            <Link to="/contact" className="closing-button">
              START A CONVERSATION
              <ArrowRight size={17} strokeWidth={1.5} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;