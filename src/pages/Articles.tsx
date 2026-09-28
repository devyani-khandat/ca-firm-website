import { ArrowDown, ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import "./articles.css";

type Article = {
  number: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
};

const ARTICLES: Article[] = [
  {
    number: "01",
    category: "BUSINESS",
    date: "12 SEPTEMBER 2026",
    readTime: "8 MIN READ",
    title: "Understanding the Financial Structure Behind a Growing Business",
    excerpt:
      "As businesses evolve, financial structure becomes increasingly important. Looking beyond individual transactions can reveal the systems and decisions that support sustainable growth.",
  },
  {
    number: "02",
    category: "TAXATION",
    date: "29 AUGUST 2026",
    readTime: "7 MIN READ",
    title: "A Practical Perspective on Tax Planning and Business Decisions",
    excerpt:
      "Tax considerations often intersect with wider business decisions. Understanding those connections can help create a more informed approach to planning.",
  },
  {
    number: "03",
    category: "COMPLIANCE",
    date: "11 AUGUST 2026",
    readTime: "6 MIN READ",
    title: "Why Compliance Should Be Part of the Business Conversation",
    excerpt:
      "Compliance is not simply a calendar of deadlines. It is connected to documentation, governance, accountability and the way an organisation operates.",
  },
  {
    number: "04",
    category: "FINANCE",
    date: "24 JULY 2026",
    readTime: "9 MIN READ",
    title: "Financial Information as a Tool for Better Decision-Making",
    excerpt:
      "Financial information becomes more useful when it is understood in context. The right perspective can turn reporting from a routine exercise into a decision-making resource.",
  },
  {
    number: "05",
    category: "ENTREPRENEURSHIP",
    date: "08 JULY 2026",
    readTime: "7 MIN READ",
    title: "The Financial Perspective Every Entrepreneur Should Develop",
    excerpt:
      "Entrepreneurship involves making decisions with incomplete information. Developing a stronger understanding of the financial side can bring greater context to those decisions.",
  },
];

function Articles() {
  return (
    <div className="articles-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="articles-hero">
        <div
          className="articles-hero-background"
          aria-hidden="true"
        />

        <div
          className="articles-hero-overlay"
          aria-hidden="true"
        />

        <div className="articles-hero-inner">

          <div className="articles-hero-grid">

            <div className="articles-hero-heading">
              <p className="articles-kicker">
                INSIGHTS / ARTICLES
              </p>

              <h1>
                Thoughtful
                <br />
                perspectives
                <br />
                on <em>what matters.</em>
              </h1>
            </div>

            <div className="articles-hero-copy">

              <p className="articles-hero-lead">
                Deeper perspectives on the financial,
                regulatory and business questions that
                shape important decisions.
              </p>

              <p>
                Our articles explore subjects in greater
                depth, bringing together practical context,
                considered observations and broader
                perspectives on matters that deserve
                a closer look.
              </p>

              <a
                href="#articles-list"
                className="articles-explore-link"
              >
                <span>EXPLORE ARTICLES</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>

          <div className="articles-hero-footer">

            <span>ANALYSIS</span>

            <span className="articles-footer-line" />

            <span>PERSPECTIVE</span>

            <span className="articles-footer-line" />

            <span>CONTEXT</span>

            <span className="articles-hero-footer-number">
              02 / 04
            </span>

          </div>

        </div>
      </section>


      {/* =================================
          EDITORIAL INTRO
      ================================= */}

      <section className="articles-intro">

        <div className="articles-intro-inner">

          <div className="articles-intro-number">
            02
          </div>

          <div className="articles-intro-content">

            <p className="articles-section-kicker">
              A CLOSER LOOK
            </p>

            <h2>
              Some questions
              <br />
              deserve <em>more context.</em>
            </h2>

            <p>
              Articles are where we slow down and examine
              the questions behind the numbers. From
              taxation and compliance to finance and
              business, these pieces are designed to offer
              a broader perspective rather than a quick answer.
            </p>

          </div>

          <div className="articles-intro-mark">
            <span>JVCL</span>
            <span>&amp; CO.</span>
          </div>

        </div>

      </section>


      {/* =================================
          ARTICLES LIST
      ================================= */}

      <section
        id="articles-list"
        className="articles-list-section"
      >

        <div className="articles-list-inner">

          <div className="articles-list-heading">

            <div>
              <p className="articles-section-kicker">
                OUR ARTICLES
              </p>

              <h2>
                Ideas worth
                <br />
                <em>examining.</em>
              </h2>
            </div>

            <p>
              Explore longer-form perspectives covering
              financial, tax, compliance and business
              subjects.
            </p>

          </div>


          <div className="articles-list">

            {ARTICLES.map((article) => (
              <article
                key={article.number}
                className="article-card"
              >

                <div className="article-card-number">
                  {article.number}
                </div>

                <div className="article-card-main">

                  <div className="article-card-meta">

                    <span className="article-card-category">
                      {article.category}
                    </span>

                    <span className="article-card-date">
                      {article.date}
                    </span>

                    <span className="article-card-read">
                      <Clock3
                        size={11}
                        strokeWidth={1.3}
                      />

                      {article.readTime}
                    </span>

                  </div>

                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.excerpt}
                  </p>

                </div>

                <Link
                  to={`/insights/articles/${article.number}`}
                  className="article-card-link"
                  aria-label={`Read ${article.title}`}
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={1.2}
                  />
                </Link>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =================================
          EDITORIAL NOTE
      ================================= */}

      <section className="articles-note">

        <div className="articles-note-inner">

          <div className="articles-note-line" />

          <div className="articles-note-grid">

            <div>
              <p className="articles-section-kicker">
                THE IDEA
              </p>

              <h2>
                Clarity often
                <br />
                begins with a
                <br />
                <em>better question.</em>
              </h2>
            </div>

            <div className="articles-note-copy">

              <p>
                Financial and regulatory matters rarely
                exist in isolation. The questions around
                them often matter just as much as the
                answers.
              </p>

              <p>
                Our articles are intended to create space
                for those questions — and to look at the
                wider context surrounding them.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CLOSING CTA
      ================================= */}

      <section className="articles-closing">

        <div
          className="articles-closing-background"
          aria-hidden="true"
        />

        <div className="articles-closing-inner">

          <div className="articles-closing-line" />

          <p className="articles-closing-kicker">
            KEEP EXPLORING
          </p>

          <h2>
            There is always
            <br />
            more to <em>understand.</em>
          </h2>

          <p className="articles-closing-copy">
            Continue exploring our insights or start
            a conversation around a matter that requires
            a closer perspective.
          </p>

          <Link
            to="/insights/publications"
            className="articles-closing-link"
          >
            <span>EXPLORE PUBLICATIONS</span>

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

export default Articles;