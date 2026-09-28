import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./approach.css";

const APPROACH_STEPS = [
  {
    number: "01",
    title: "UNDERSTAND",
    text: "Start with the context. Every matter begins with understanding what is important, what is changing and what needs attention.",
  },
  {
    number: "02",
    title: "ANALYSE",
    text: "Examine the details that matter. A considered view brings structure to information and clarity to complexity.",
  },
  {
    number: "03",
    title: "ADVISE",
    text: "Translate complexity into clarity. The right perspective can make important financial and regulatory matters easier to navigate.",
  },
  {
    number: "04",
    title: "DELIVER",
    text: "Move forward with confidence. Clear thinking and attention to detail create a stronger foundation for the decisions ahead.",
  },
];

function Approach() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const stepElements =
      document.querySelectorAll<HTMLElement>(".approach-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            );

            setActiveStep(index);
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: "-10% 0px -25% 0px",
      }
    );

    stepElements.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="approach-page">

      {/* =========================================================
          HERO
          ========================================================= */}

      <section className="approach-hero">

        <div
          className="approach-hero-background"
          aria-hidden="true"
        />

        <div
          className="approach-hero-overlay"
          aria-hidden="true"
        />

        <div className="approach-hero-inner">

          <div className="approach-hero-grid">

            <div className="approach-hero-heading">

              <p className="approach-kicker">
                OUR APPROACH
              </p>

              <h1>
                A thoughtful
                <br />
                approach to
                <br />
                <em>every decision.</em>
              </h1>

            </div>

            <div className="approach-hero-copy">

              <p className="approach-hero-lead">
                Clarity begins with understanding the
                context behind every matter.
              </p>

              <p>
                A considered approach brings structure to
                complexity, attention to the details that matter,
                and perspective to the decisions ahead.
              </p>

              <a
                href="#approach-philosophy"
                className="approach-explore-link"
              >
                <span>DISCOVER OUR APPROACH</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>

          <div className="approach-hero-footer">

            <span>UNDERSTAND</span>

            <span className="approach-footer-line" />

            <span>ANALYSE</span>

            <span className="approach-footer-line" />

            <span>ADVISE</span>

            <span className="approach-footer-line" />

            <span>DELIVER</span>

            <span className="approach-footer-number">
              03 / 04
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          PHILOSOPHY
          ========================================================= */}

      <section
        id="approach-philosophy"
        className="approach-philosophy"
      >

        <div className="approach-philosophy-inner">

          <div className="approach-philosophy-top">

            <div>

              <p className="approach-section-kicker">
                THE PHILOSOPHY
              </p>

              <h2>
                Good advice begins
                <br />
                <em>with understanding.</em>
              </h2>

            </div>

            <p className="approach-philosophy-intro">
              Financial, tax, audit and regulatory matters
              rarely exist in isolation. Understanding the
              wider context creates a clearer foundation
              for professional perspective.
            </p>

          </div>


          <div className="approach-philosophy-statement">

            <span className="approach-statement-mark">
              “
            </span>

            <p>
              Precision in the details.
              <br />
              Perspective in the
              <em> bigger picture.</em>
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          APPROACH STEPS
          ========================================================= */}

      <section className="approach-steps-section">

        <div className="approach-steps-inner">

          <div className="approach-steps-header">

            <div>

              <p className="approach-section-kicker">
                HOW WE THINK
              </p>

              <h2>
                From complexity
                <br />
                to <em>clarity.</em>
              </h2>

            </div>

            <p>
              A simple framework for approaching important
              matters with structure, perspective and care.
            </p>

          </div>


          <div className="approach-process">

            <div className="approach-process-sidebar">

              <div className="approach-process-label">
                <span>THE PROCESS</span>
              </div>

              <div className="approach-process-progress">

                <div
                  className="approach-process-progress-fill"
                  style={{
                    height: `${((activeStep + 1) / APPROACH_STEPS.length) * 100}%`,
                  }}
                />

              </div>

              <div className="approach-process-counter">
                <span>
                  {String(activeStep + 1).padStart(2, "0")}
                </span>

                <span>/</span>

                <span>
                  {String(APPROACH_STEPS.length).padStart(2, "0")}
                </span>
              </div>

            </div>


            <div className="approach-steps">

              {APPROACH_STEPS.map((step, index) => (

                <div
                  key={step.number}
                  data-index={index}
                  className={`approach-step ${
                    activeStep === index
                      ? "is-active"
                      : ""
                  }`}
                >

                  <div className="approach-step-number">
                    {step.number}
                  </div>

                  <div className="approach-step-content">

                    <div className="approach-step-heading">

                      <h3>
                        {step.title}
                      </h3>

                      <span className="approach-step-small-number">
                        {step.number}
                      </span>

                    </div>

                    <p>
                      {step.text}
                    </p>

                  </div>

                  <div className="approach-step-arrow">

                    <ArrowRight
                      size={20}
                      strokeWidth={1.2}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CLOSING CTA
          ========================================================= */}

      <section className="approach-closing-cta">

        <div
          className="approach-closing-background"
          aria-hidden="true"
        />

        <div className="approach-closing-inner">

          <div className="approach-closing-line" />

          <p className="approach-closing-kicker">
            CLARITY STARTS HERE
          </p>

          <h2>
            Every matter has
            <br />
            its own <em>context.</em>
          </h2>

          <p className="approach-closing-copy">
            Tell us what you're working through,
            and let's start the conversation.
          </p>

          <Link
            to="/contact"
            className="approach-closing-link"
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

export default Approach;