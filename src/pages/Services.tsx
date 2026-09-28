import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "./servicesData";
import "./services.css";

function Services() {
  return (
    <div className="services-page">

      {/* =====================================================
          SECTION 01 — INTRODUCTION
          ===================================================== */}

      <section className="services-hero">

        <div
          className="services-hero-background"
          aria-hidden="true"
        />

        <div
          className="services-hero-overlay"
          aria-hidden="true"
        />

        <div className="services-hero-inner">

          <div className="services-hero-grid">

            {/* LEFT */}
            <div className="services-hero-heading">

              <p className="services-kicker">
                WHAT WE DO
              </p>

              <h1>
                Expertise that
                <br />
                brings <em>clarity</em>
                <br />
                to complexity.
              </h1>

            </div>


            {/* RIGHT */}
            <div className="services-hero-copy">

              <p className="services-hero-lead">
                Professional services for the financial,
                regulatory and compliance matters that shape
                your business.
              </p>

              <p>
                From incorporation and taxation to audit and
                regulatory compliance, our services are designed
                around the areas in which professional guidance
                matters most.
              </p>

              <a
                href="#services-list"
                className="services-explore-link"
              >
                <span>EXPLORE OUR SERVICES</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>


          {/* BOTTOM STATEMENT */}
          <div className="services-hero-footer">

            <span>PRECISION</span>

            <span className="services-footer-line" />

            <span>CLARITY</span>

            <span className="services-footer-line" />

            <span>CONFIDENCE</span>

            <span className="services-footer-number">
              02 / 04
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 02 — SERVICES LIST
          ===================================================== */}

      <section
        id="services-list"
        className="services-list-section"
      >

        <div className="services-list-inner">

          {/* SECTION INTRO */}
          <div className="services-list-intro">

            <div>

              <p className="services-list-kicker">
                OUR SERVICES
              </p>

              <h2>
                Focused expertise.
                <br />
                <em>Professional perspective.</em>
              </h2>

            </div>

            <p className="services-list-description">
              A considered range of professional services
              supporting businesses through important
              financial, taxation, audit and compliance matters.
            </p>

          </div>


          {/* SERVICE LIST */}
          <div className="services-list">

            {SERVICES.map((service) => (

              <Link
                key={service.number}
                to={`/services/${service.slug}`}
                className="service-row"
              >

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-title">
                  {service.title}
                </span>

                <span className="service-action">
                  <ArrowRight
                    size={18}
                    strokeWidth={1.3}
                  />
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 03 — CLOSING CTA
          ===================================================== */}

      <section className="services-closing-cta">

        <div
          className="services-closing-background"
          aria-hidden="true"
        />

        <div className="services-closing-inner">

          <div className="services-closing-line" />

          <p className="services-closing-kicker">
            LET'S TALK
          </p>

          <h2>
            Not sure where
            <br />
            <em>to begin?</em>
          </h2>

          <p className="services-closing-copy">
            Tell us what you're working through, and let's
            start the conversation.
          </p>

          <Link
            to="/contact"
            className="services-closing-link"
          >
            <span>GET IN TOUCH</span>

            <ArrowRight
              size={17}
              strokeWidth={1.3}
            />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Services;