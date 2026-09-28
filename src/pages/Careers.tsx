
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./careers.css";

const VALUES = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "Keep learning, keep exploring and keep asking better questions.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "Approach every responsibility with honesty, care and accountability.",
  },
  {
    number: "03",
    title: "Precision",
    description:
      "Give the details the attention they deserve, because details shape decisions.",
  },
  {
    number: "04",
    title: "Perspective",
    description:
      "Look beyond individual tasks to understand the bigger picture.",
  },
];

function Careers() {
  return (
    <div className="careers-page">
      {/* HERO */}
      <section className="careers-hero">
        <div
          className="careers-hero-background"
          aria-hidden="true"
        />
        <div
          className="careers-hero-overlay"
          aria-hidden="true"
        />

        <div className="careers-container careers-hero-content">
          <span className="careers-eyebrow">CAREERS</span>

          <h1>
            Build a career
            <br />
            <em>with perspective.</em>
          </h1>

          <div className="careers-hero-bottom">
            <p>
              Meaningful work begins with curiosity, integrity
              and a willingness to keep learning.
            </p>

            <a
              href="#careers-introduction"
              className="careers-scroll-link"
              aria-label="Explore careers"
            >
              <ArrowDownRight size={23} strokeWidth={1.2} />
            </a>
          </div>
        </div>

        <span className="careers-hero-index">01 / 05</span>
      </section>

      {/* INTRODUCTION */}
      <section
        className="careers-introduction"
        id="careers-introduction"
      >
        <div className="careers-container careers-intro-layout">
          <div className="careers-section-label">
            <span className="careers-label-line" />
            A PROFESSIONAL JOURNEY
          </div>

          <div className="careers-intro-content">
            <h2>
              More than
              <br />
              <em>a role.</em>
            </h2>

            <p className="careers-intro-lead">
              A career is shaped by the questions we ask,
              the challenges we approach and the knowledge
              we build along the way.
            </p>

            <p className="careers-intro-description">
              The world of accounting, taxation, compliance
              and advisory offers opportunities to develop
              technical understanding alongside a broader
              business perspective.
            </p>
          </div>
        </div>

        <div className="careers-intro-decoration" aria-hidden="true">
          JVCL
        </div>
      </section>

      {/* VALUES */}
      <section className="careers-values">
        <div className="careers-container">
          <div className="careers-values-heading">
            <div>
              <span className="careers-eyebrow">
                THE PRINCIPLES THAT MATTER
              </span>

              <h2>
                What we
                <br />
                <em>value.</em>
              </h2>
            </div>

            <p>
              Four principles that offer a thoughtful
              foundation for professional growth.
            </p>
          </div>

          <div className="careers-values-grid">
            {VALUES.map((value) => (
              <article
                className="careers-value-card"
                key={value.number}
              >
                <div className="careers-value-top">
                  <span>{value.number}</span>
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.15}
                    aria-hidden="true"
                  />
                </div>

                <div className="careers-value-bottom">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="careers-opportunities">
        <div className="careers-container careers-opportunities-layout">
          <div className="careers-section-label careers-section-label-dark">
            <span className="careers-label-line" />
            EXPLORE OPPORTUNITIES
          </div>

          <div className="careers-opportunities-content">
            <span className="careers-opportunities-index">
              YOUR NEXT CHAPTER
            </span>

            <h2>
              Every journey
              <br />
              begins <em>somewhere.</em>
            </h2>

            <p>
              Whether you're beginning your professional
              journey or considering your next step,
              start a conversation with us.
            </p>

            <Link to="/contact" className="careers-cv-link">
              <span>SEND YOUR CV</span>
              <ArrowUpRight size={19} strokeWidth={1.3} />
            </Link>

            <span className="careers-opportunities-note">
              For career-related enquiries, please use our
              contact page.
            </span>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="careers-closing">
        <div className="careers-closing-background" aria-hidden="true" />

        <div className="careers-container careers-closing-content">
          <span className="careers-eyebrow careers-eyebrow-light">
            LET'S CONNECT
          </span>

          <h2>
            Good work begins
            <br />
            <em>with good people.</em>
          </h2>

          <Link to="/contact" className="careers-closing-link">
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={19} strokeWidth={1.3} />
          </Link>
        </div>

        <span className="careers-closing-index">05 / 05</span>
      </section>
    </div>
  );
}

export default Careers;