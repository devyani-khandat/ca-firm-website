import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";

import { Link } from "react-router-dom";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./about.css";

type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

function About() {
  return (
    <div className="about-page">

      {/* =====================================================
          SECTION 01 — THE FIRM
          ===================================================== */}

      <section className="about-firm">

        <div
          className="about-firm-background"
          aria-hidden="true"
        />

        <div className="about-firm-inner">

          <div className="about-firm-grid">

            {/* LEFT */}
            <div className="about-firm-heading">

              <p className="about-kicker">
                JVCL &amp; CO. LLP
              </p>

              <h1>
                More than
                <br />
                numbers.
                <br />
                <em>A partnership built</em>
                <br />
                <em>on perspective.</em>
              </h1>

            </div>


            {/* RIGHT */}
            <div className="about-firm-copy">

              <p className="about-lead">
                At JVCL &amp; Co. LLP, we believe that meaningful
                professional relationships begin with understanding.
              </p>

              <p>
                We are a professional services firm focused on helping
                individuals and businesses navigate financial,
                regulatory and strategic matters with clarity and
                confidence.
              </p>

              <p>
                Our approach combines technical expertise with a
                thoughtful understanding of the people and businesses
                behind the numbers. We believe that sound advice is
                not simply about solving today's challenges, but about
                creating a stronger foundation for tomorrow.
              </p>

              <p>
                Through every engagement, we aim to bring precision,
                perspective and a genuine commitment to the people
                we work with.
              </p>

              <a
                href="#about-values"
                className="about-scroll-link"
              >
                <span>EXPLORE OUR STORY</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>


          {/* BOTTOM STATEMENT */}
          <div className="about-firm-footer">

            <span>CLARITY</span>

            <span className="about-footer-line" />

            <span>TRUST</span>

            <span className="about-footer-line" />

            <span>PERSPECTIVE</span>

            <span className="about-footer-number">
              01 / 04
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 02 — VISION / MISSION / VALUES
          ===================================================== */}

      <section
        id="about-values"
        className="about-vision"
      >

        <div className="about-vision-inner">

          {/* INTRO */}
          <div className="vision-intro">

            <div>

              <p className="vision-kicker">
                WHAT GUIDES US
              </p>

              <h2>
                Looking beyond
                <br />
                <em>the numbers.</em>
              </h2>

            </div>

          </div>


          {/* VISION + MISSION */}
          <div className="vision-mission-grid">

            {/* VISION */}
            <article className="vision-card">

              <div className="vision-card-top">

                <span className="vision-card-number">
                  01
                </span>

                <span className="vision-card-label">
                  OUR VISION
                </span>

              </div>


              <div className="vision-card-content">

                <h3>
                  To be a trusted professional
                  partner for every stage of
                  our clients' journey.
                </h3>

                <p>
                  We aspire to build lasting relationships founded on
                  trust, insight and a shared commitment to progress.
                </p>

              </div>

            </article>


            {/* MISSION */}
            <article className="vision-card mission-card">

              <div className="vision-card-top">

                <span className="vision-card-number">
                  02
                </span>

                <span className="vision-card-label">
                  OUR MISSION
                </span>

              </div>


              <div className="vision-card-content">

                <h3>
                  To deliver thoughtful,
                  reliable and insightful
                  professional services.
                </h3>

                <p>
                  We combine technical expertise with a practical
                  understanding of our clients' needs to create
                  meaningful and lasting value.
                </p>

              </div>

            </article>

          </div>


          {/* VALUES */}
          <div className="vision-values">

            <div className="values-heading">
              <span>OUR VALUES</span>
            </div>


            <div className="values-list">

              {/* VALUE 01 */}
              <div className="value-item">

                <span className="value-number">
                  01
                </span>

                <div>

                  <h4>Integrity</h4>

                  <p>
                    Acting with honesty, responsibility and
                    transparency in every engagement.
                  </p>

                </div>

              </div>


              {/* VALUE 02 */}
              <div className="value-item">

                <span className="value-number">
                  02
                </span>

                <div>

                  <h4>Excellence</h4>

                  <p>
                    Maintaining a high standard of quality,
                    precision and professional service.
                  </p>

                </div>

              </div>


              {/* VALUE 03 */}
              <div className="value-item">

                <span className="value-number">
                  03
                </span>

                <div>

                  <h4>Partnership</h4>

                  <p>
                    Building relationships based on collaboration,
                    understanding and mutual trust.
                  </p>

                </div>

              </div>


              {/* VALUE 04 */}
              <div className="value-item">

                <span className="value-number">
                  04
                </span>

                <div>

                  <h4>Perspective</h4>

                  <p>
                    Looking beyond immediate challenges to
                    understand the bigger picture.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 03 — GALLERY
          ===================================================== */}

      <section className="about-gallery">

        <div className="about-gallery-inner">

          {/* GALLERY INTRO */}
          <div className="gallery-intro">

            <div>

              <p className="gallery-kicker">
                OUR WORLD
              </p>

              <h2>
                A glimpse behind
                <br />
                <em>the numbers.</em>
              </h2>

            </div>


            <p className="gallery-intro-copy">
              A closer look at the people, spaces and moments
              that shape the way we work.
            </p>

          </div>


          {/* FAN CAROUSEL */}
          <FanCarousel />

        </div>

      </section>


      {/* =====================================================
          SECTION 04 — CLOSING CTA
          ===================================================== */}

      <section className="about-closing-cta">

        <div
          className="about-closing-background"
          aria-hidden="true"
        />

        <div className="about-closing-inner">

          <div className="about-closing-line" />

          <p className="about-closing-kicker">
            LET'S BEGIN
          </p>

          <h2>
            A clearer path
            <br />
            <em>starts with a conversation.</em>
          </h2>

          <p className="about-closing-copy">
            Whether you're navigating a new opportunity, a complex
            decision or planning for what's ahead, we're here to help
            you move forward with clarity.
          </p>

          <Link
            to="/contact"
            className="about-closing-link"
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


/* =========================================================
   FAN CAROUSEL
   ========================================================= */

function FanCarousel() {

  const [activeIndex, setActiveIndex] = useState(0);

  const [stageVisible, setStageVisible] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);

  const dragStartX = useRef<number | null>(null);

  const isDragging = useRef(false);

  const didSwipe = useRef(false);


  /*
   * TEMPORARY GALLERY IMAGES
   *
   * Replace these later with the firm's actual photographs.
   */
  const galleryItems: GalleryItem[] = [

    {
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",

      title: "Our Office",

      description:
        "A space where ideas, conversations and collaboration come together.",
    },


    {
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",

      title: "Our People",

      description:
        "Professional relationships built through collaboration and trust.",
    },


    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",

      title: "Conversations",

      description:
        "Understanding the challenges behind every business decision.",
    },


    {
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",

      title: "Attention to Detail",

      description:
        "Thoughtful analysis and precision in everything we undertake.",
    },


    {
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",

      title: "Perspective",

      description:
        "Looking beyond the immediate to understand the bigger picture.",
    },


    {
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",

      title: "Together",

      description:
        "Building relationships that create lasting value.",
    },

  ];


  /* =====================================================
     ENTRANCE ANIMATION
     ===================================================== */

  useEffect(() => {

    const stage = stageRef.current;

    if (!stage) {
      return;
    }


    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          setStageVisible(true);

          observer.disconnect();

        }

      },
      {
        threshold: 0.2,
      }
    );


    observer.observe(stage);


    return () => {
      observer.disconnect();
    };

  }, []);


  /* =====================================================
     NAVIGATION
     ===================================================== */

  const goNext = () => {

    setActiveIndex(
      (current) =>
        (current + 1) % galleryItems.length
    );

  };


  const goPrevious = () => {

    setActiveIndex(
      (current) =>
        (current - 1 + galleryItems.length) %
        galleryItems.length
    );

  };


  /* =====================================================
     CARD POSITION
     ===================================================== */

  const getOffset = (index: number) => {

    let offset = index - activeIndex;


    /*
     * Wrap cards around the carousel so the fan
     * stays balanced.
     */
    if (offset > galleryItems.length / 2) {

      offset -= galleryItems.length;

    }


    if (offset < -galleryItems.length / 2) {

      offset += galleryItems.length;

    }


    return offset;

  };


  /* =====================================================
     POINTER DOWN
     ===================================================== */

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>
  ) => {

    dragStartX.current = event.clientX;

    isDragging.current = true;

    didSwipe.current = false;


    event.currentTarget.setPointerCapture(
      event.pointerId
    );

  };


  /* =====================================================
     POINTER UP
     ===================================================== */

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>
  ) => {

    if (
      dragStartX.current === null ||
      !isDragging.current
    ) {

      return;

    }


    const distance =
      event.clientX - dragStartX.current;


    /*
     * Minimum horizontal movement required
     * for a swipe.
     */
    const swipeThreshold = 55;


    if (Math.abs(distance) > swipeThreshold) {

      didSwipe.current = true;


      if (distance < 0) {

        goNext();

      } else {

        goPrevious();

      }

    }


    dragStartX.current = null;

    isDragging.current = false;


    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {

      event.currentTarget.releasePointerCapture(
        event.pointerId
      );

    }

  };


  /* =====================================================
     POINTER CANCEL
     ===================================================== */

  const handlePointerCancel = (
    event: PointerEvent<HTMLDivElement>
  ) => {

    dragStartX.current = null;

    isDragging.current = false;


    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {

      event.currentTarget.releasePointerCapture(
        event.pointerId
      );

    }

  };


  /* =====================================================
     RENDER
     ===================================================== */

  return (

    <div className="fan-carousel">

      {/* =================================================
          CARD STAGE
          ================================================= */}

      <div
        ref={stageRef}
        className={`fan-stage ${
          stageVisible
            ? "fan-stage-visible"
            : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >

        {galleryItems.map(
          (item, index) => {

            const offset =
              getOffset(index);


            /*
             * IMPORTANT:
             *
             * about.css expects --offset.
             */
            const cardStyle = {
              "--offset": offset,
            } as CSSProperties;


            return (

              <button
                key={item.title}
                type="button"
                className={`fan-card ${
                  offset === 0
                    ? "fan-card-active"
                    : ""
                }`}
                style={cardStyle}
                onClick={() => {

                  /*
                   * A swipe also generates a click event.
                   * Prevent that click from overriding the
                   * swipe result.
                   */
                  if (didSwipe.current) {

                    didSwipe.current = false;

                    return;

                  }


                  setActiveIndex(index);

                }}
                aria-label={`View ${item.title}`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                />

                <span
                  className="fan-card-overlay"
                  aria-hidden="true"
                />

              </button>

            );

          }
        )}

      </div>


      {/* =================================================
          CAROUSEL INFORMATION
          ================================================= */}

      <div className="fan-information">

        {/* COUNTER */}

        <div className="fan-counter">

          <span>
            {String(
              activeIndex + 1
            ).padStart(2, "0")}
          </span>

          <span className="fan-counter-line" />

          <span>
            {String(
              galleryItems.length
            ).padStart(2, "0")}
          </span>

        </div>


        {/* CAPTION */}

        <div className="fan-caption">

          <h3>
            {galleryItems[activeIndex].title}
          </h3>

          <p>
            {galleryItems[activeIndex].description}
          </p>

        </div>


        {/* ARROWS */}

        <div className="fan-controls">

          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous gallery image"
          >

            <ArrowLeft
              size={17}
              strokeWidth={1.3}
            />

          </button>


          <button
            type="button"
            onClick={goNext}
            aria-label="Next gallery image"
          >

            <ArrowRight
              size={17}
              strokeWidth={1.3}
            />

          </button>

        </div>

      </div>


      {/* =================================================
          INTERACTION HINT
          ================================================= */}

      <p className="fan-hint">
        SWIPE, DRAG OR USE THE ARROWS
      </p>

    </div>

  );
}


export default About;