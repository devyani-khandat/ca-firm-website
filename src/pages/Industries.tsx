import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./industries.css";

const PERSPECTIVES = [
  {
    number: "01",
    title: "BUSINESS",
    text: "The financial and regulatory considerations that shape everyday business decisions.",
  },
  {
    number: "02",
    title: "ENTREPRENEURSHIP",
    text: "The questions that emerge when an idea develops into something larger.",
  },
  {
    number: "03",
    title: "COMMERCE",
    text: "The structures, transactions and obligations that support commercial activity.",
  },
  {
    number: "04",
    title: "ENTERPRISE",
    text: "The broader financial perspective required as organisations evolve.",
  },
  {
    number: "05",
    title: "GROWTH",
    text: "The changing considerations that accompany new opportunities and expansion.",
  },
  {
    number: "06",
    title: "TRANSFORMATION",
    text: "The financial and regulatory questions that arise when businesses change direction.",
  },
];

function Industries() {
  return (
    <div className="industries-page">

      {/* =========================================================
          HERO
          ========================================================= */}

      <section className="industries-hero">

        <div
          className="industries-hero-background"
          aria-hidden="true"
        />

        <div
          className="industries-hero-overlay"
          aria-hidden="true"
        />

        <div className="industries-hero-inner">

          <div className="industries-hero-grid">

            <div className="industries-hero-heading">

              <p className="industries-kicker">
                INDUSTRIES WE SERVE
              </p>

              <h1>
                Perspective that
                <br />
                understands the
                <br />
                <em>bigger picture.</em>
              </h1>

            </div>

            <div className="industries-hero-copy">

              <p className="industries-hero-lead">
                Different environments bring different
                financial, regulatory and business
                considerations.
              </p>

              <p>
                Understanding the wider context creates
                a stronger foundation for navigating the
                questions that matter.
              </p>

              <a
                href="#industries-perspectives"
                className="industries-explore-link"
              >
                <span>EXPLORE THE PERSPECTIVE</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>

          <div className="industries-hero-footer">

            <span>CONTEXT</span>

            <span className="industries-footer-line" />

            <span>PERSPECTIVE</span>

            <span className="industries-footer-line" />

            <span>CLARITY</span>

            <span className="industries-footer-number">
              04 / 04
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUCTION
          ========================================================= */}

      <section
        id="industries-perspectives"
        className="industries-intro"
      >

        <div className="industries-intro-inner">

          <div className="industries-intro-heading">

            <p className="industries-section-kicker">
              A WIDER VIEW
            </p>

            <h2>
              Every business
              <br />
              has its own <em>context.</em>
            </h2>

          </div>

          <div className="industries-intro-copy">

            <p>
              No two businesses ask exactly the same
              questions. The stage of the organisation,
              its objectives and the environment around
              it can all shape the matters that require
              attention.
            </p>

            <p>
              Rather than approaching every situation
              in the same way, a broader perspective helps
              bring the relevant considerations into focus.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          PERSPECTIVES GRID
          ========================================================= */}

      <section className="industries-grid-section">

        <div className="industries-grid-inner">

          <div className="industries-grid-header">

            <div>

              <p className="industries-section-kicker">
                AREAS OF PERSPECTIVE
              </p>

              <h2>
                Different questions.
                <br />
                <em>Different contexts.</em>
              </h2>

            </div>

            <span className="industries-grid-note">
              A FRAMEWORK FOR THINKING
            </span>

          </div>


          <div className="industries-grid">

            {PERSPECTIVES.map((item) => (

              <article
                key={item.number}
                className="industry-card"
              >

                <div className="industry-card-top">

                  <span className="industry-number">
                    {item.number}
                  </span>

                  <span className="industry-arrow">
                    <ArrowRight
                      size={18}
                      strokeWidth={1.2}
                    />
                  </span>

                </div>

                <div className="industry-card-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

                <span
                  className="industry-card-line"
                  aria-hidden="true"
                />

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CLOSING STATEMENT
          ========================================================= */}

      <section className="industries-statement">

        <div
          className="industries-statement-background"
          aria-hidden="true"
        />

        <div className="industries-statement-inner">

          <div className="industries-statement-line" />

          <p className="industries-statement-kicker">
            THE BIGGER PICTURE
          </p>

          <h2>
            Different businesses.
            <br />
            Different questions.
            <br />
            <em>One clearer perspective.</em>
          </h2>

          <Link
            to="/contact"
            className="industries-statement-link"
          >
            <span>LET'S TALK</span>

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

export default Industries;