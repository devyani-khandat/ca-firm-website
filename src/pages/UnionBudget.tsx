import {
  ArrowDown,
  ArrowRight,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./union-budget.css";

type BudgetItem = {
  number: string;
  category: string;
  title: string;
  description: string;
};

const BUDGET_ITEMS: BudgetItem[] = [
  {
    number: "01",
    category: "BUSINESS",
    title: "What the Budget Means for Businesses",
    description:
      "A practical look at the areas of the Union Budget that may matter to businesses, entrepreneurs and growing organisations.",
  },
  {
    number: "02",
    category: "TAXATION",
    title: "Tax Measures in Perspective",
    description:
      "An overview of taxation-related announcements and the broader questions they may raise for individuals and businesses.",
  },
  {
    number: "03",
    category: "COMPLIANCE",
    title: "Regulatory & Compliance Considerations",
    description:
      "Key compliance themes to keep in view when assessing Budget announcements and their practical implications.",
  },
  {
    number: "04",
    category: "INDIVIDUALS",
    title: "Understanding the Budget as an Individual",
    description:
      "A simplified perspective on the areas of the Budget that may be relevant to individuals and personal financial decisions.",
  },
];

function UnionBudget() {
  return (
    <div className="union-budget-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="union-budget-hero">

        <div
          className="union-budget-hero-background"
          aria-hidden="true"
        />

        <div
          className="union-budget-hero-overlay"
          aria-hidden="true"
        />

        <div className="union-budget-hero-inner">

          <div className="union-budget-hero-grid">

            <div className="union-budget-hero-heading">

              <p className="union-budget-kicker">
                INSIGHTS / UNION BUDGET
              </p>

              <h1>
                Understanding
                <br />
                the Budget
                <br />
                <em>in context.</em>
              </h1>

            </div>

            <div className="union-budget-hero-copy">

              <p className="union-budget-hero-lead">
                A considered perspective on the Union Budget
                and the questions it raises for businesses,
                individuals and the wider economy.
              </p>

              <p>
                Explore our collection of Budget observations,
                practical perspectives and resources designed
                to bring greater clarity to important
                announcements.
              </p>

              <a
                href="#budget-content"
                className="union-budget-explore-link"
              >
                <span>EXPLORE BUDGET INSIGHTS</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>

          <div className="union-budget-hero-footer">

            <span>ANALYSIS</span>

            <span className="union-budget-footer-line" />

            <span>IMPACT</span>

            <span className="union-budget-footer-line" />

            <span>PERSPECTIVE</span>

            <span className="union-budget-hero-footer-number">
              04 / 04
            </span>

          </div>

        </div>

      </section>


      {/* =================================
          BUDGET INTRO
      ================================= */}

      <section className="union-budget-intro">

        <div className="union-budget-intro-inner">

          <div className="union-budget-intro-year">
            <span>UNION</span>
            <strong>BUDGET</strong>
            <span>RESOURCE</span>
          </div>

          <div className="union-budget-intro-content">

            <p className="union-budget-section-kicker">
              A CLOSER LOOK
            </p>

            <h2>
              Beyond the
              <br />
              announcement.
              <br />
              <em>Into the implications.</em>
            </h2>

            <p>
              The Union Budget contains a wide range of
              announcements. Understanding what they mean
              often requires looking beyond the headline and
              considering the wider financial, tax and
              regulatory context.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          BUDGET CONTENT
      ================================= */}

      <section
        id="budget-content"
        className="union-budget-content"
      >

        <div className="union-budget-content-inner">

          <div className="union-budget-content-heading">

            <div>

              <p className="union-budget-section-kicker">
                BUDGET PERSPECTIVES
              </p>

              <h2>
                What deserves
                <br />
                <em>attention.</em>
              </h2>

            </div>

            <p>
              Explore different areas of the Budget through
              a practical and contextual lens.
            </p>

          </div>


          <div className="union-budget-items">

            {BUDGET_ITEMS.map((item) => (
              <article
                key={item.number}
                className="union-budget-item"
              >

                <div className="union-budget-item-number">
                  {item.number}
                </div>

                <div className="union-budget-item-main">

                  <p className="union-budget-item-category">
                    {item.category}
                  </p>

                  <h3>
                    {item.title}
                  </h3>

                  <p className="union-budget-item-description">
                    {item.description}
                  </p>

                  <Link
                    to={`/insights/union-budget/${item.number}`}
                    className="union-budget-item-link"
                  >
                    <span>READ PERSPECTIVE</span>

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
          BUDGET RESOURCE
      ================================= */}

      <section className="union-budget-resource">

        <div className="union-budget-resource-inner">

          <div className="union-budget-resource-top">

            <p className="union-budget-section-kicker">
              BUDGET RESOURCE
            </p>

            <span className="union-budget-resource-index">
              04
            </span>

          </div>

          <div className="union-budget-resource-grid">

            <div className="union-budget-document">

              <div className="union-budget-document-inner">

                <div className="union-budget-document-top">
                  <span>JVCL &amp; CO. LLP</span>
                  <span>INSIGHTS</span>
                </div>

                <div className="union-budget-document-title">
                  <span>UNION</span>
                  <strong>BUDGET</strong>
                  <span>RESOURCE</span>
                </div>

                <div className="union-budget-document-icon">
                  <FileText
                    size={34}
                    strokeWidth={0.9}
                  />
                </div>

                <div className="union-budget-document-bottom">
                  <span>DEMO RESOURCE</span>
                  <span>2026</span>
                </div>

              </div>

            </div>


            <div className="union-budget-resource-copy">

              <h2>
                One document.
                <br />
                <em>A clearer starting point.</em>
              </h2>

              <p>
                A dedicated Budget resource can bring
                together announcements, observations,
                explanations and practical considerations
                in one place.
              </p>

              <p>
                This section is currently presented as a
                demonstration of how the firm's future
                Budget resource library could be organised.
              </p>

              <button
                type="button"
                className="union-budget-resource-link"
              >
                <span>DOWNLOAD RESOURCE</span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.2}
                />
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          IMPORTANT NOTE
      ================================= */}

      <section className="union-budget-note">

        <div className="union-budget-note-inner">

          <div className="union-budget-note-line" />

          <p className="union-budget-section-kicker">
            KEEP IN CONTEXT
          </p>

          <h2>
            Headlines explain
            <br />
            the announcement.
            <br />
            <em>Context explains why it matters.</em>
          </h2>

          <p className="union-budget-note-copy">
            Budget announcements can have different
            implications depending on the individual,
            business or situation. A closer look can help
            place each development in its wider context.
          </p>

        </div>

      </section>


      {/* =================================
          CLOSING CTA
      ================================= */}

      <section className="union-budget-closing">

        <div
          className="union-budget-closing-background"
          aria-hidden="true"
        />

        <div className="union-budget-closing-inner">

          <div className="union-budget-closing-line" />

          <p className="union-budget-closing-kicker">
            EXPLORE MORE
          </p>

          <h2>
            Perspective makes
            <br />
            information
            <br />
            <em>more useful.</em>
          </h2>

          <p className="union-budget-closing-copy">
            Continue exploring our insights or return to
            the wider collection of resources.
          </p>

          <Link
            to="/insights"
            className="union-budget-closing-link"
          >
            <span>BACK TO INSIGHTS</span>

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

export default UnionBudget;