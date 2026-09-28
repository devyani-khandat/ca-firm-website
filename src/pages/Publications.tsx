import { ArrowDown, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import "./publications.css";

type Publication = {
  number: string;
  type: string;
  year: string;
  title: string;
  description: string;
};

const PUBLICATIONS: Publication[] = [
  {
    number: "01",
    type: "BUSINESS REPORT",
    year: "2026",
    title: "The Business Perspective",
    description:
      "A considered look at the financial, operational and strategic questions that businesses encounter as they evolve.",
  },
  {
    number: "02",
    type: "TAX REPORT",
    year: "2026",
    title: "Tax & Compliance Outlook",
    description:
      "A practical overview of changing tax and compliance considerations and the questions businesses should keep in view.",
  },
  {
    number: "03",
    type: "SECTOR NOTE",
    year: "2026",
    title: "Understanding Business Transformation",
    description:
      "Perspectives on the financial and regulatory considerations that accompany transformation and organisational growth.",
  },
  {
    number: "04",
    type: "ANNUAL REVIEW",
    year: "2025",
    title: "Financial Year in Perspective",
    description:
      "A retrospective look at important financial themes, business questions and regulatory developments from the year.",
  },
  {
    number: "05",
    type: "SPECIAL REPORT",
    year: "2025",
    title: "Building Stronger Financial Foundations",
    description:
      "A publication exploring the role of financial structure, reporting and compliance in creating a more informed business environment.",
  },
];

function Publications() {
  return (
    <div className="publications-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="publications-hero">

        <div
          className="publications-hero-background"
          aria-hidden="true"
        />

        <div
          className="publications-hero-overlay"
          aria-hidden="true"
        />

        <div className="publications-hero-inner">

          <div className="publications-hero-grid">

            <div className="publications-hero-heading">

              <p className="publications-kicker">
                INSIGHTS / PUBLICATIONS
              </p>

              <h1>
                Knowledge
                <br />
                worth
                <br />
                <em>keeping.</em>
              </h1>

            </div>

            <div className="publications-hero-copy">

              <p className="publications-hero-lead">
                Reports, reviews and considered perspectives
                created to bring greater context to important
                financial and business questions.
              </p>

              <p>
                Explore our collection of publications covering
                taxation, compliance, finance, business and
                the wider regulatory environment.
              </p>

              <a
                href="#publications-list"
                className="publications-explore-link"
              >
                <span>EXPLORE PUBLICATIONS</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>

          <div className="publications-hero-footer">

            <span>RESEARCH</span>

            <span className="publications-footer-line" />

            <span>KNOWLEDGE</span>

            <span className="publications-footer-line" />

            <span>PERSPECTIVE</span>

            <span className="publications-hero-footer-number">
              03 / 04
            </span>

          </div>

        </div>

      </section>


      {/* =================================
          ARCHIVE INTRO
      ================================= */}

      <section className="publications-intro">

        <div className="publications-intro-inner">

          <div className="publications-intro-index">
            <span>ARCHIVE</span>
            <strong>03</strong>
          </div>

          <div className="publications-intro-content">

            <p className="publications-section-kicker">
              THE COLLECTION
            </p>

            <h2>
              More than information.
              <br />
              <em>A point of reference.</em>
            </h2>

            <p>
              Publications bring together ideas, observations
              and analysis in a format designed to be revisited.
              They provide a broader view of subjects that
              deserve more than a passing glance.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          PUBLICATION LIST
      ================================= */}

      <section
        id="publications-list"
        className="publications-list-section"
      >

        <div className="publications-list-inner">

          <div className="publications-list-heading">

            <div>

              <p className="publications-section-kicker">
                PUBLICATION ARCHIVE
              </p>

              <h2>
                Explore the
                <br />
                <em>collection.</em>
              </h2>

            </div>

            <p>
              Browse our collection of reports, reviews and
              special publications. Each publication is designed
              to bring together information around a central
              subject or theme.
            </p>

          </div>


          <div className="publications-list">

            {PUBLICATIONS.map((publication) => (
              <article
                key={publication.number}
                className="publication-card"
              >

                <div className="publication-card-number">
                  {publication.number}
                </div>


                <div className="publication-card-cover">

                  <div className="publication-card-cover-inner">

                    <span className="publication-cover-firm">
                      JVCL &amp; CO. LLP
                    </span>

                    <span className="publication-cover-type">
                      {publication.type}
                    </span>

                    <span className="publication-cover-year">
                      {publication.year}
                    </span>

                    <span className="publication-cover-line" />

                    <BookOpen
                      size={24}
                      strokeWidth={0.9}
                    />

                  </div>

                </div>


                <div className="publication-card-content">

                  <div className="publication-card-meta">

                    <span>{publication.type}</span>

                    <span>{publication.year}</span>

                  </div>

                  <h3>
                    {publication.title}
                  </h3>

                  <p>
                    {publication.description}
                  </p>

                  <Link
                    to={`/insights/publications/${publication.number}`}
                    className="publication-card-link"
                  >
                    <span>VIEW PUBLICATION</span>

                    <ArrowRight
                      size={16}
                      strokeWidth={1.2}
                    />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =================================
          KNOWLEDGE STATEMENT
      ================================= */}

      <section className="publications-statement">

        <div className="publications-statement-inner">

          <div className="publications-statement-mark">
            03
          </div>

          <div className="publications-statement-content">

            <p className="publications-section-kicker">
              PERSPECTIVE
            </p>

            <h2>
              Good information
              <br />
              becomes valuable
              <br />
              when it is given
              <br />
              <em>context.</em>
            </h2>

          </div>

          <div className="publications-statement-copy">

            <p>
              Numbers, regulations and financial information
              rarely tell the whole story on their own.
            </p>

            <p>
              Publications allow us to bring those elements
              together and consider what they mean in the
              broader context of business and decision-making.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          CLOSING CTA
      ================================= */}

      <section className="publications-closing">

        <div
          className="publications-closing-background"
          aria-hidden="true"
        />

        <div className="publications-closing-inner">

          <div className="publications-closing-line" />

          <p className="publications-closing-kicker">
            CONTINUE EXPLORING
          </p>

          <h2>
            There is always
            <br />
            another perspective
            <br />
            <em>worth exploring.</em>
          </h2>

          <p className="publications-closing-copy">
            Continue through our insights or explore the
            latest Union Budget resources.
          </p>

          <Link
            to="/insights/union-budget"
            className="publications-closing-link"
          >
            <span>UNION BUDGET</span>

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

export default Publications;