import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SERVICES } from "./servicesData";
import "./service-detail.css";

function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="service-detail-page">

        <section className="service-not-found">

          <p className="service-detail-kicker">
            SERVICE
          </p>

          <h1>
            Service not found.
          </h1>

          <Link
            to="/services"
            className="service-back-link"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.3}
            />

            <span>BACK TO SERVICES</span>
          </Link>

        </section>

      </div>
    );
  }

  return (
    <div className="service-detail-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="service-detail-hero">

        <div
          className="service-detail-background"
          aria-hidden="true"
        />

        <div className="service-detail-overlay" aria-hidden="true" />

        <div className="service-detail-inner">

          <Link
            to="/services"
            className="service-detail-back"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.3}
            />

            <span>BACK TO SERVICES</span>
          </Link>


          <div className="service-detail-heading">

            <p className="service-detail-kicker">
              SERVICE {service.number}
            </p>

            <h1>
              {service.title}
            </h1>

            <div className="service-detail-line" />

          </div>

        </div>

      </section>


      {/* =====================================================
          INFORMATION
          ===================================================== */}

      <section className="service-detail-content">

        <div className="service-detail-content-inner">

          <div className="service-detail-intro">

            <p className="service-detail-section-label">
              ABOUT THIS SERVICE
            </p>

            <h2>
              Professional information
              <br />
              <em>coming together.</em>
            </h2>

          </div>


          <div className="service-detail-body">

            <p className="service-detail-placeholder">
              Detailed information about{" "}
              <strong>{service.title}</strong>{" "}
              will be added here once the firm's
              service information is finalized.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CTA
          ===================================================== */}

      <section className="service-detail-cta">

        <div className="service-detail-cta-inner">

          <p className="service-detail-cta-kicker">
            HAVE QUESTIONS?
          </p>

          <h2>
            Let's talk about
            <br />
            <em>{service.title.toLowerCase()}.</em>
          </h2>

          <Link
            to="/contact"
            className="service-detail-contact"
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

export default ServiceDetail;