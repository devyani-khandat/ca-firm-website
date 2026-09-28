import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./contact.css";

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Company Incorporation",
  "LLP Incorporation",
  "GST Advisory",
  "Income Tax Advisory",
  "Audit & Assurance",
  "ROC Compliances",
];

function Contact() {
  return (
    <div className="contact-page">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="contact-hero">
        <div
          className="contact-hero-background"
          aria-hidden="true"
        />

        <div
          className="contact-hero-overlay"
          aria-hidden="true"
        />

        <div className="contact-container contact-hero-content">
          <span className="contact-eyebrow">
            CONTACT
          </span>

          <h1>
            Let&apos;s start
            <br />
            <em>a conversation.</em>
          </h1>

          <div className="contact-hero-bottom">
            <p>
              Whether you have a question, an idea or a
              matter to discuss, we&apos;re here to listen.
            </p>

            <a
              href="#contact-form"
              className="contact-scroll-link"
              aria-label="Go to contact form"
            >
              <ArrowDownRight
                size={23}
                strokeWidth={1.2}
              />
            </a>
          </div>
        </div>

        <span className="contact-hero-index">
          01 / 04
        </span>
      </section>

      {/* ========================================
          CONTACT INFORMATION
      ======================================== */}

      <section className="contact-information">
        <div className="contact-container">
          <div className="contact-info-heading">
            <div className="contact-section-label">
              <span className="contact-label-line" />
              FIND YOUR WAY TO US
            </div>

            <div>
              <span className="contact-small-kicker">
                JVCL &amp; CO. LLP
              </span>

              <h2>
                Let&apos;s keep
                <br />
                <em>things clear.</em>
              </h2>
            </div>
          </div>

          <div className="contact-info-grid">
            {/* EMAIL */}
            <a
              href="mailto:info@example.com"
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                <Mail
                  size={19}
                  strokeWidth={1.2}
                />
              </div>

              <span className="contact-info-label">
                EMAIL
              </span>

              <h3>
                info@example.com
              </h3>

              <span className="contact-info-arrow">
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.2}
                />
              </span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+910000000000"
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                <Phone
                  size={19}
                  strokeWidth={1.2}
                />
              </div>

              <span className="contact-info-label">
                PHONE
              </span>

              <h3>
                +91 00000 00000
              </h3>

              <span className="contact-info-arrow">
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.2}
                />
              </span>
            </a>

            {/* OFFICE */}
            <div className="contact-info-card contact-info-card-static">
              <div className="contact-info-icon">
                <MapPin
                  size={19}
                  strokeWidth={1.2}
                />
              </div>

              <span className="contact-info-label">
                OFFICE
              </span>

              <h3>
                Office address
                <br />
                coming soon
              </h3>

              <span className="contact-info-note">
                LOCATION DETAILS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FORM
      ======================================== */}

      <section
        className="contact-form-section"
        id="contact-form"
      >
        <div className="contact-container contact-form-layout">
          <div className="contact-form-intro">
            <div className="contact-section-label">
              <span className="contact-label-line" />
              SEND AN ENQUIRY
            </div>

            <h2>
              Tell us
              <br />
              <em>what&apos;s on your mind.</em>
            </h2>

            <p>
              Share a little about what you&apos;re looking
              for. We&apos;ll use the information to understand
              your enquiry and start the conversation.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="contact-form-row">
              <label>
                <span>
                  YOUR NAME
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </label>

              <label>
                <span>
                  EMAIL ADDRESS
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </label>
            </div>

            <div className="contact-form-row">
              <label>
                <span>
                  PHONE NUMBER
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </label>

              <label>
                <span>
                  SUBJECT
                </span>

                <select
                  name="subject"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                  >
                    Select an enquiry type
                  </option>

                  {ENQUIRY_TYPES.map((type) => (
                    <option
                      value={type}
                      key={type}
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="contact-message-field">
              <span>
                YOUR MESSAGE
              </span>

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us a little about your enquiry..."
              />
            </label>

            <div className="contact-form-footer">
              <span>
                This form is currently a
                demonstration and does not
                submit data.
              </span>

              <button
                type="submit"
                className="contact-submit-button"
              >
                <span>SEND ENQUIRY</span>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.2}
                />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ========================================
          SERVICE NAVIGATION
      ======================================== */}

      <section className="contact-services">
        <div className="contact-container">
          <div className="contact-services-heading">
            <span className="contact-eyebrow">
              NOT SURE WHERE TO BEGIN?
            </span>

            <h2>
              Start with
              <br />
              <em>what matters.</em>
            </h2>
          </div>

          <div className="contact-services-list">
            <Link to="/services/company-incorporation">
              <span>01</span>
              <strong>Company Incorporation</strong>
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
              />
            </Link>

            <Link to="/services/llp-incorporation">
              <span>02</span>
              <strong>LLP Incorporation</strong>
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
              />
            </Link>

            <Link to="/services/gst-advisory">
              <span>03</span>
              <strong>GST Advisory</strong>
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
              />
            </Link>

            <Link to="/services/income-tax-advisory">
              <span>04</span>
              <strong>Income Tax Advisory</strong>
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
              />
            </Link>

            <Link to="/services/statutory-audits">
              <span>05</span>
              <strong>Statutory Audits</strong>
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
              />
            </Link>

            <Link to="/services/tax-audits">
              <span>06</span>
              <strong>Tax Audits</strong>
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
              />
            </Link>

            <Link to="/services/roc-compliances">
              <span>07</span>
              <strong>ROC Compliances</strong>
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          CLOSING CTA
      ======================================== */}

      <section className="contact-closing">
        <div
          className="contact-closing-background"
          aria-hidden="true"
        />

        <div className="contact-container contact-closing-content">
          <span className="contact-eyebrow contact-eyebrow-light">
            ONE CONVERSATION CAN CHANGE THE PICTURE
          </span>

          <h2>
            The next step
            <br />
            <em>starts here.</em>
          </h2>

          <a
            href="mailto:info@example.com"
            className="contact-closing-link"
          >
            <span>EMAIL US</span>

            <ArrowUpRight
              size={19}
              strokeWidth={1.2}
            />
          </a>
        </div>

        <span className="contact-closing-index">
          04 / 04
        </span>
      </section>
    </div>
  );
}

export default Contact;