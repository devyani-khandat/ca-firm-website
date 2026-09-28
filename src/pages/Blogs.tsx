import { ArrowDown, ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import "./blogs.css";

type Blog = {
  number: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
};

const BLOGS: Blog[] = [
  {
    number: "01",
    category: "TAXATION",
    date: "18 SEPTEMBER 2026",
    readTime: "5 MIN READ",
    title: "Building a More Thoughtful Approach to Tax Planning",
    excerpt:
      "Tax planning is often viewed through the narrow lens of reducing liability. A more considered approach begins with understanding the wider financial picture and making decisions with the future in mind.",
  },
  {
    number: "02",
    category: "COMPLIANCE",
    date: "04 SEPTEMBER 2026",
    readTime: "4 MIN READ",
    title: "What Growing Businesses Should Know About Compliance",
    excerpt:
      "As a business grows, its regulatory responsibilities grow with it. Understanding the fundamentals of compliance can help founders and management approach those responsibilities with greater confidence.",
  },
  {
    number: "03",
    category: "BUSINESS",
    date: "27 AUGUST 2026",
    readTime: "6 MIN READ",
    title: "The Financial Questions Every Growing Business Eventually Faces",
    excerpt:
      "Growth brings opportunity, but it also brings new financial questions. From cash flow to structure and reporting, knowing which questions to ask can make the path forward clearer.",
  },
  {
    number: "04",
    category: "GST",
    date: "14 AUGUST 2026",
    readTime: "5 MIN READ",
    title: "Making Sense of GST: Beyond the Compliance Calendar",
    excerpt:
      "GST compliance is more than filing returns on time. Understanding how transactions, documentation and reporting connect can create a more organised approach to indirect taxation.",
  },
  {
    number: "05",
    category: "FINANCE",
    date: "31 JULY 2026",
    readTime: "7 MIN READ",
    title: "Why Financial Clarity Matters Before the Next Big Decision",
    excerpt:
      "Important business decisions are rarely made with perfect information. Strong financial reporting can provide the context needed to evaluate opportunities, risks and priorities.",
  },
  {
    number: "06",
    category: "ENTREPRENEURSHIP",
    date: "16 JULY 2026",
    readTime: "4 MIN READ",
    title: "From Founder to Business Leader: A Changing Financial Perspective",
    excerpt:
      "As an enterprise evolves, so does the role of its founder. A growing business often requires a shift from managing individual decisions to understanding the larger financial picture.",
  },
];

function Blogs() {
  return (
    <div className="blogs-page">

      {/* =================================
          HERO
      ================================= */}
    <section className="blogs-hero">
  <div className="ca-hero-background" aria-hidden="true" />
  <div className="blogs-hero-pattern" aria-hidden="true" />
  <div className="blogs-hero-glow" aria-hidden="true" />

        <div className="blogs-hero-inner">
          <div className="blogs-hero-grid">

            <div className="blogs-hero-heading">
              <p className="blogs-kicker">
                INSIGHTS / BLOGS
              </p>

              <h1>
                Practical
                <br />
                ideas for
                <br />
                <em>everyday decisions.</em>
              </h1>
            </div>

            <div className="blogs-hero-copy">
              <p className="blogs-hero-lead">
                Perspectives on taxation, compliance,
                finance and the realities of building
                and growing a business.
              </p>

              <p>
                Our blog brings complex subjects into
                clearer focus through practical observations,
                useful context and conversations around
                the financial matters that shape everyday
                decisions.
              </p>

              <a
                href="#blog-list"
                className="blogs-explore-link"
              >
                <span>READ OUR BLOG</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>
            </div>

          </div>

          <div className="blogs-hero-footer">
            <span>IDEAS</span>

            <span className="blogs-footer-line" />

            <span>PERSPECTIVE</span>

            <span className="blogs-footer-line" />

            <span>PRACTICALITY</span>

            <span className="blogs-hero-footer-number">
              01 / 04
            </span>
          </div>
        </div>
      </section>


      {/* =================================
          FEATURED BLOG
      ================================= */}

      <section className="blogs-featured">
        <div className="blogs-featured-inner">

          <div className="blogs-featured-label">
            <span>FEATURED</span>
            <span>01</span>
          </div>

          <div className="blogs-featured-grid">

            <div className="blogs-featured-visual">
              <div className="blogs-featured-visual-number">
                01
              </div>

              <div className="blogs-featured-visual-word">
                PERSPECTIVE
              </div>

              <div className="blogs-featured-visual-line" />
            </div>

            <div className="blogs-featured-content">
              <div className="blogs-meta">
                <span>TAXATION</span>

                <span>18 SEPTEMBER 2026</span>

                <span className="blogs-meta-read">
                  <Clock3
                    size={12}
                    strokeWidth={1.3}
                  />
                  5 MIN READ
                </span>
              </div>

              <h2>
                Building a More Thoughtful
                <br />
                Approach to <em>Tax Planning</em>
              </h2>

              <p>
                Tax planning is often viewed through the narrow
                lens of reducing liability. A more considered
                approach begins with understanding the wider
                financial picture and making decisions with the
                future in mind.
              </p>

              <Link
                to="/insights/blogs/tax-planning"
                className="blogs-read-link"
              >
                <span>READ ARTICLE</span>

                <ArrowRight
                  size={17}
                  strokeWidth={1.3}
                />
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* =================================
          BLOG LIST
      ================================= */}

      <section
        id="blog-list"
        className="blogs-list-section"
      >
        <div className="blogs-list-inner">

          <div className="blogs-list-heading">
            <div>
              <p className="blogs-section-kicker">
                ALL STORIES
              </p>

              <h2>
                Explore the
                <br />
                <em>latest thinking.</em>
              </h2>
            </div>

            <p>
              A collection of practical perspectives covering
              the financial, tax and compliance questions that
              businesses and individuals encounter along the way.
            </p>
          </div>


          <div className="blogs-list">
            {BLOGS.slice(1).map((blog) => (
              <article
                key={blog.number}
                className="blog-card"
              >
                <div className="blog-card-top">
                  <span className="blog-card-number">
                    {blog.number}
                  </span>

                  <span className="blog-card-category">
                    {blog.category}
                  </span>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>{blog.date}</span>

                    <span className="blog-card-divider" />

                    <span className="blog-card-read">
                      <Clock3
                        size={11}
                        strokeWidth={1.3}
                      />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3>{blog.title}</h3>

                  <p>{blog.excerpt}</p>
                </div>

                <Link
                  to={`/insights/blogs/${blog.number}`}
                  className="blog-card-link"
                  aria-label={`Read ${blog.title}`}
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
          TOPICS
      ================================= */}

      <section className="blogs-topics">
        <div className="blogs-topics-inner">

          <div className="blogs-topics-heading">
            <p className="blogs-section-kicker">
              EXPLORE BY TOPIC
            </p>

            <h2>
              Follow the
              <br />
              <em>questions.</em>
            </h2>
          </div>

          <div className="blogs-topic-list">
            <span>Taxation</span>
            <span>GST</span>
            <span>Compliance</span>
            <span>Business</span>
            <span>Finance</span>
            <span>Entrepreneurship</span>
          </div>

        </div>
      </section>


      {/* =================================
          CLOSING CTA
      ================================= */}

      <section className="blogs-closing">
        <div
          className="blogs-closing-background"
          aria-hidden="true"
        />

        <div className="blogs-closing-inner">

          <div className="blogs-closing-line" />

          <p className="blogs-closing-kicker">
            KEEP READING
          </p>

          <h2>
            Good questions
            <br />
            lead to <em>better decisions.</em>
          </h2>

          <p className="blogs-closing-copy">
            Explore our other resources or start a conversation
            around a matter that requires a closer look.
          </p>

          <Link
            to="/insights/articles"
            className="blogs-closing-link"
          >
            <span>EXPLORE ARTICLES</span>

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

export default Blogs;