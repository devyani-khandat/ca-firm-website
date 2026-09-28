import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./team.css";

type TeamMember = {
  id: string;
  number: string;
  name: string;
  designation: string;
  qualification: string;
  expertise: string;
  experience: string;
  image: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-01",
    number: "01",
    name: "Partner Name",
    designation: "Partner",
    qualification: "Qualification",
    expertise: "Area of expertise",
    experience: "Years of experience",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "member-02",
    number: "02",
    name: "Partner Name",
    designation: "Partner",
    qualification: "Qualification",
    expertise: "Area of expertise",
    experience: "Years of experience",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "member-03",
    number: "03",
    name: "Team Member",
    designation: "Designation",
    qualification: "Qualification",
    expertise: "Area of expertise",
    experience: "Years of experience",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "member-04",
    number: "04",
    name: "Team Member",
    designation: "Designation",
    qualification: "Qualification",
    expertise: "Area of expertise",
    experience: "Years of experience",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1000&q=85",
  },
];

function Team() {
  const [activeMember, setActiveMember] = useState(0);

  const moveNext = () => {
    setActiveMember((current) =>
      current === TEAM_MEMBERS.length - 1 ? 0 : current + 1
    );
  };

  const moveToMember = (index: number) => {
    setActiveMember(index);
  };

  return (
    <div className="team-page">

      {/* =========================================================
          HERO
          ========================================================= */}

      <section className="team-hero">

        <div
          className="team-hero-background"
          aria-hidden="true"
        />

        <div
          className="team-hero-overlay"
          aria-hidden="true"
        />

        <div className="team-hero-inner">

          <div className="team-hero-grid">

            <div className="team-hero-heading">

              <p className="team-kicker">
                TEAM / PARTNERS
              </p>

              <h1>
                The people
                <br />
                behind the
                <br />
                <em>perspective.</em>
              </h1>

            </div>

            <div className="team-hero-copy">

              <p className="team-hero-lead">
                Professional perspective is built through
                people, experience and thoughtful
                conversations.
              </p>

              <p>
                Meet the people whose knowledge and
                perspective shape the work behind every
                client relationship.
              </p>

              <a
                href="#team-profiles"
                className="team-explore-link"
              >
                <span>MEET THE TEAM</span>

                <ArrowDown
                  size={16}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>

          <div className="team-hero-footer">

            <span>PEOPLE</span>

            <span className="team-footer-line" />

            <span>EXPERIENCE</span>

            <span className="team-footer-line" />

            <span>PERSPECTIVE</span>

            <span className="team-hero-footer-number">
              05 / 05
            </span>

          </div>

        </div>

      </section>


      {/* =========================================================
          CARD FOLDER
          ========================================================= */}

      <section
        id="team-profiles"
        className="team-folder-section"
      >

        <div className="team-folder-inner">

          <div className="team-folder-header">

            <div>

              <p className="team-section-kicker">
                OUR PEOPLE
              </p>

              <h2>
                Meet the
                <br />
                <em>team.</em>
              </h2>

            </div>

            <p className="team-folder-note">
              SELECT A PROFILE
            </p>

          </div>


          <div className="team-folder">

            <div className="team-folder-cards">

              {TEAM_MEMBERS.map((member, index) => {

                const position =
                  (index - activeMember + TEAM_MEMBERS.length) %
                  TEAM_MEMBERS.length;

                return (
                  <button
                    type="button"
                    key={member.id}
                    className={`team-card ${
                      index === activeMember
                        ? "is-active"
                        : ""
                    }`}
                    style={
                      {
                        "--card-position": position,
                      } as React.CSSProperties
                    }
                    onClick={() => moveToMember(index)}
                    aria-label={`View ${member.name}`}
                  >

                    <div className="team-card-image">

                      <img
                        src={member.image}
                        alt=""
                      />

                      <div className="team-card-image-overlay" />

                    </div>


                    <div className="team-card-top">

                      <span>
                        {member.number}
                      </span>

                      <span>
                        PROFILE
                      </span>

                    </div>


                    <div className="team-card-content">

                      <p className="team-card-placeholder">
                        PLACEHOLDER PROFILE
                      </p>

                      <h3>
                        {member.name}
                      </h3>

                      <p className="team-card-designation">
                        {member.designation}
                      </p>

                    </div>


                    <div className="team-card-details">

                      <div>
                        <span>QUALIFICATION</span>
                        <strong>
                          {member.qualification}
                        </strong>
                      </div>

                      <div>
                        <span>EXPERTISE</span>
                        <strong>
                          {member.expertise}
                        </strong>
                      </div>

                      <div>
                        <span>EXPERIENCE</span>
                        <strong>
                          {member.experience}
                        </strong>
                      </div>

                    </div>


                    <div className="team-card-arrow">

                      <ArrowRight
                        size={19}
                        strokeWidth={1.2}
                      />

                    </div>

                  </button>
                );
              })}

            </div>


            {/* =====================================================
                FOLDER CONTROLS
                ===================================================== */}

            <div className="team-folder-controls">

              <div className="team-folder-progress">

                <div
                  className="team-folder-progress-fill"
                  style={{
                    width: `${
                      ((activeMember + 1) /
                        TEAM_MEMBERS.length) *
                      100
                    }%`,
                  }}
                />

              </div>

              <div className="team-folder-counter">

                <span>
                  {String(activeMember + 1).padStart(2, "0")}
                </span>

                <span>/</span>

                <span>
                  {String(TEAM_MEMBERS.length).padStart(2, "0")}
                </span>

              </div>

              <button
                type="button"
                className="team-next-button"
                onClick={moveNext}
                aria-label="Next team member"
              >

                <ArrowRight
                  size={19}
                  strokeWidth={1.2}
                />

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CLOSING CTA
          ========================================================= */}

      <section className="team-closing">

        <div
          className="team-closing-background"
          aria-hidden="true"
        />

        <div className="team-closing-inner">

          <div className="team-closing-line" />

          <p className="team-closing-kicker">
            THE HUMAN SIDE
          </p>

          <h2>
            Good work begins
            <br />
            with good <em>conversations.</em>
          </h2>

          <p className="team-closing-copy">
            Sometimes the first step is simply
            starting a conversation.
          </p>

          <Link
            to="/contact"
            className="team-closing-link"
          >

            <span>
              GET IN TOUCH
            </span>

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

export default Team;