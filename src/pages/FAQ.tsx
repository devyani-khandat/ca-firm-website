import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./faq.css";

const FAQS = [
  {
    number: "01",
    question: "What services does JVCL & Co. LLP provide?",
    answer:
      "Our services are presented across areas including company incorporation, LLP incorporation, GST advisory, income tax advisory, statutory audits, tax audits and ROC compliances. Detailed service information can be explored through the Services section.",
  },
  {
    number: "02",
    question: "How do I get started with an enquiry?",
    answer:
      "You can begin by sharing a brief description of your requirement through the Contact page. This helps establish an initial understanding of the matter before the next steps are discussed.",
  },
  {
    number: "03",
    question: "Can I discuss a requirement before deciding to engage?",
    answer:
      "Yes. An initial conversation can help clarify the nature of your requirement and identify the relevant area of professional assistance.",
  },
  {
    number: "04",
    question: "Do you work with businesses at different stages?",
    answer:
      "Professional requirements can vary depending on the stage, structure and circumstances of a business. The appropriate area of assistance can be discussed based on the specific requirement.",
  },
  {
    number: "05",
    question: "Can I approach you for tax and compliance matters?",
    answer:
      "Yes. Tax and compliance-related matters form part of the services presented on this website. The nature and scope of assistance can be discussed based on the specific circumstances.",
  },
  {
    number: "06",
    question: "What information should I provide when making an enquiry?",
    answer:
      "A brief description of your requirement, along with any relevant context, is generally helpful. You do not need to provide extensive information in your first message; the details can be discussed further during the conversation.",
  },
  {
    number: "07",
    question: "How can I enquire about career opportunities?",
    answer:
      "Career-related enquiries can be made through the Careers page or by getting in touch through the Contact page. Specific openings and application details can be added here once they are finalized by the firm.",
  },
  {
    number: "08",
    question: "Where can I find more information about the firm?",
    answer:
      "You can explore the About, Services, Approach, Industries, Team and Insights sections of the website for an overview of the firm and its areas of work.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <div className="faq-page">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="faq-hero">
        <div
          className="faq-hero-background"
          aria-hidden="true"
        />

        <div
          className="faq-hero-overlay"
          aria-hidden="true"
        />

        <div className="faq-container faq-hero-content">
          <span className="faq-eyebrow">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h1>
            Questions,
            <br />
            <em>made clearer.</em>
          </h1>

          <div className="faq-hero-bottom">
            <p>
              A few things you may want to know before
              beginning the conversation.
            </p>

            <a
              href="#faq-list"
              className="faq-scroll-link"
              aria-label="Explore frequently asked questions"
            >
              <ArrowDownRight
                size={23}
                strokeWidth={1.2}
              />
            </a>
          </div>
        </div>

        <span className="faq-hero-index">
          01 / 04
        </span>
      </section>

      {/* ========================================
          INTRODUCTION
      ======================================== */}

      <section className="faq-introduction">
        <div className="faq-container faq-intro-layout">
          <div className="faq-section-label faq-section-label-light">
            <span className="faq-label-line" />
            BEFORE WE BEGIN
          </div>

          <div className="faq-intro-content">
            <span className="faq-intro-kicker">
              CLARITY STARTS WITH A QUESTION
            </span>

            <h2>
              Start with
              <br />
              <em>what you need.</em>
            </h2>

            <p>
              Every professional requirement has its own
              context. These questions offer a starting
              point, while a conversation can help bring
              greater clarity to your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ ACCORDION
      ======================================== */}

      <section
        className="faq-list-section"
        id="faq-list"
      >
        <div className="faq-container">
          <div className="faq-list-heading">
            <div>
              <span className="faq-eyebrow">
                THE ESSENTIALS
              </span>

              <h2>
                Frequently
                <br />
                <em>asked.</em>
              </h2>
            </div>

            <p>
              Browse the questions below or get in touch
              if your requirement is more specific.
            </p>
          </div>

          <div className="faq-accordion">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={faq.number}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="faq-question-number">
                      {faq.number}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>

                    <span className="faq-question-icon">
                      <Plus
                        size={19}
                        strokeWidth={1.2}
                      />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer-wrapper"
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT CTA
      ======================================== */}

      <section className="faq-contact">
        <div className="faq-container faq-contact-layout">
          <div className="faq-section-label">
            <span className="faq-label-line" />
            STILL HAVE A QUESTION?
          </div>

          <div className="faq-contact-content">
            <span className="faq-contact-kicker">
              LET&apos;S TALK
            </span>

            <h2>
              Some questions
              <br />
              are better <em>discussed.</em>
            </h2>

            <p>
              If you haven't found the answer you're
              looking for, tell us what you need help with
              and we'll start from there.
            </p>

            <Link
              to="/contact"
              className="faq-contact-link"
            >
              <span>GET IN TOUCH</span>

              <ArrowUpRight
                size={19}
                strokeWidth={1.2}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          CLOSING
      ======================================== */}

      <section className="faq-closing">
        <div
          className="faq-closing-background"
          aria-hidden="true"
        />

        <div className="faq-container faq-closing-content">
          <span className="faq-eyebrow faq-eyebrow-light">
            CLARITY BEGINS WITH A CONVERSATION
          </span>

          <h2>
            When the question
            <br />
            matters, <em>ask.</em>
          </h2>

          <Link
            to="/contact"
            className="faq-closing-link"
          >
            <span>CONTACT US</span>

            <ArrowUpRight
              size={19}
              strokeWidth={1.2}
            />
          </Link>
        </div>

        <span className="faq-closing-index">
          04 / 04
        </span>
      </section>
    </div>
  );
}

export default FAQ;