import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  FileText,
  Landmark,
  Newspaper,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./insights.css";

const INSIGHT_CATEGORIES = [
  {
    number: "01",
    title: "Blogs",
    description:
      "Practical perspectives on taxation, finance, compliance and the questions businesses encounter every day.",
    icon: Newspaper,
    link: "/insights/blogs",
  },
  {
    number: "02",
    title: "Articles",
    description:
      "Thoughtful analysis exploring financial, regulatory and business matters in greater depth.",
    icon: FileText,
    link: "/insights/articles",
  },
  {
    number: "03",
    title: "Publications",
    description:
      "Structured resources and professional publications designed to make complex subjects easier to understand.",
    icon: BookOpen,
    link: "/insights/publications",
  },
  {
    number: "04",
    title: "Union Budget",
    description:
      "A focused view of key Budget proposals, taxation changes and their implications for businesses and individuals.",
    icon: Landmark,
    link: "/insights/union-budget",
  },
];

const FEATURED_INSIGHTS = [
  {
    category: "TAXATION",
    date: "18 SEPTEMBER 2026",
    title: "Building a More Thoughtful Approach to Tax Planning",
    excerpt:
      "Why effective tax planning is not simply about reducing liability, but about making informed decisions with the wider financial picture in mind.",
    link: "/insights/articles",
  },
  {
    category: "BUSINESS",
    date: "04 SEPTEMBER 2026",
    title: "What Growing Businesses Should Know About Compliance",
    excerpt:
      "As businesses evolve, their regulatory responsibilities evolve with them. Understanding those obligations early can create greater clarity later.",
    link: "/insights/blogs",
  },
  {
    category: "UNION BUDGET",
    date: "12 AUGUST 2026",
    title: "Union Budget 2026: Key Areas to Watch",
    excerpt:
      "A concise overview of the proposals and themes that matter most to businesses, professionals and individual taxpayers.",
    link: "/insights/union-budget",
  },
];

function Insights() {
  return (
    <div className="insights-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="insights-hero">
        <div className="insights-hero-background" aria-hidden="true" />
        <div className="insights-hero-overlay" aria-hidden="true" />

        <div className="insights-hero-inner">
          <div className="insights-hero-grid">

            <div className="insights-hero-heading">
              <p className="insights-kicker">INSIGHTS / RESOURCES</p>

              <h1>
                Ideas that
                <br />
                bring <em>perspective</em>
                <br />
                to decisions.
              </h1>
            </div>

            <div className="insights-hero-copy">
              <p className="insights-hero-lead">
                Perspectives, analysis and resources for
                navigating the financial and regulatory
                landscape with greater clarity.
              </p>

              <p>
                Explore our collection of articles, publications,
                practical observations and Budget insights
                covering the issues that matter to businesses
                and individuals.
              </p>

              <a
                href="#insights-categories"
                className="insights-explore-link"
              >
                <span>EXPLORE INSIGHTS</span>
                <ArrowDown size={16} strokeWidth={1.4} />
              </a>
            </div>

          </div>

          <div className="insights-hero-footer">
            <span>KNOWLEDGE</span>

            <span className="insights-footer-line" />

            <span>PERSPECTIVE</span>

            <span className="insights-footer-line" />

            <span>CLARITY</span>

            <span className="insights-hero-footer-number">
              06 / 08
            </span>
          </div>
        </div>
      </section>


      {/* =================================
          INTRO
      ================================= */}

      <section className="insights-intro">
        <div className="insights-intro-inner">

          <div className="insights-intro-label">
            <span>01</span>
            <span>KNOWLEDGE CENTRE</span>
          </div>

          <div className="insights-intro-content">
            <h2>
              Understanding
              <br />
              comes <em>first.</em>
            </h2>

            <div className="insights-intro-copy">
              <p>
                Financial and regulatory matters rarely exist
                in isolation. The decisions made today can
                influence how a business operates, grows and
                responds tomorrow.
              </p>

              <p>
                Our insights are designed to provide context,
                explain complexity and encourage more informed
                conversations around the matters that shape
                financial decisions.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =================================
          CATEGORIES
      ================================= */}

      <section
        id="insights-categories"
        className="insights-categories"
      >
        <div className="insights-categories-inner">

          <div className="insights-section-heading">
            <div>
              <p className="insights-section-kicker">
                EXPLORE
              </p>

              <h2>
                Our knowledge
                <br />
                <em>centre.</em>
              </h2>
            </div>

            <p>
              Browse perspectives across four areas,
              each designed to make important financial
              and regulatory subjects easier to navigate.
            </p>
          </div>


          <div className="insights-category-grid">
            {INSIGHT_CATEGORIES.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.number}
                  to={category.link}
                  className="insight-category-card"
                >
                  <div className="insight-category-top">
                    <span>{category.number}</span>

                    <Icon
                      size={21}
                      strokeWidth={1.2}
                    />
                  </div>

                  <div className="insight-category-content">
                    <h3>{category.title}</h3>

                    <p>{category.description}</p>
                  </div>

                  <div className="insight-category-bottom">
                    <span>EXPLORE</span>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.3}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>


      {/* =================================
          FEATURED INSIGHTS
      ================================= */}

      <section className="insights-featured">
        <div className="insights-featured-inner">

          <div className="insights-featured-heading">
            <div>
              <p className="insights-section-kicker">
                FROM THE DESK
              </p>

              <h2>
                Featured
                <br />
                <em>perspectives.</em>
              </h2>
            </div>

            <Link
              to="/insights/blogs"
              className="insights-view-all"
            >
              <span>VIEW ALL INSIGHTS</span>

              <ArrowRight
                size={17}
                strokeWidth={1.3}
              />
            </Link>
          </div>


          <div className="featured-insights-list">
            {FEATURED_INSIGHTS.map((insight, index) => (
              <Link
                key={insight.title}
                to={insight.link}
                className="featured-insight-row"
              >
                <div className="featured-insight-number">
                  0{index + 1}
                </div>

                <div className="featured-insight-meta">
                  <span>{insight.category}</span>
                  <span>{insight.date}</span>
                </div>

                <div className="featured-insight-main">
                  <h3>{insight.title}</h3>

                  <p>{insight.excerpt}</p>
                </div>

                <div className="featured-insight-arrow">
                  <ArrowRight
                    size={18}
                    strokeWidth={1.2}
                  />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* =================================
          CLOSING CTA
      ================================= */}

      <section className="insights-closing">
        <div
          className="insights-closing-background"
          aria-hidden="true"
        />

        <div className="insights-closing-inner">

          <div className="insights-closing-line" />

          <p className="insights-closing-kicker">
            KEEP EXPLORING
          </p>

          <h2>
            Better information.
            <br />
            <em>Clearer decisions.</em>
          </h2>

          <p className="insights-closing-copy">
            Explore our latest perspectives or get in touch
            to discuss a matter that requires a closer look.
          </p>

          <Link
            to="/contact"
            className="insights-closing-link"
          >
            <span>START A CONVERSATION</span>

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

export default Insights;