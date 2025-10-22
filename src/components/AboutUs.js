import React from "react";
import "./AboutUs.css";

const teamMembers = [
  {
    id: 1,
    name: "Maxwell Mathew",
    role: "Project Lead",
    description: "Visionary leader with a passion for blending tradition and modern sound.",
    image: "/maxwell2.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Mark Menezes",
    role: "Web Developer",
    description: "Expert in building creative websites that resonate with users.",
    image: "/mark.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Aaditya Parab",
    role: "Web Developer",
    description: "Crafts seamless digital experiences with clean, scalable code.",
    image: "/aaditya.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Amey Manoj",
    role: "Backend Developer",
    description: "Designs strong backend systems to support dynamic web applications.",
    image: "/amey.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 5,
    name: "Mayank Masurkar",
    role: "Design Lead",
    description: "Brings rhythm and harmony to every project with a wealth of expertise.",
    image: "/mayank.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-page-header">
          <h1 className="about-page-title">
            <span className="about-title-gradient">Meet Our Team</span>
          </h1>
          <p className="about-page-subtitle">
            The passionate people behind <strong>SOUNDWAVE</strong>
          </p>
        </div>

        <div className="about-team-grid">
          {teamMembers.map((member, index) => (
            <div
              className="about-team-card"
              key={member.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="about-card-gradient-border">
                <div className="about-card-content">
                  <div className="about-image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="about-team-image"
                    />
                    <div className="about-image-overlay"></div>
                  </div>
                  <div className="about-card-info">
                    <h2 className="about-team-name">{member.name}</h2>
                    <p className="about-team-role">{member.role}</p>
                    <p className="about-team-desc">{member.description}</p>
                    <div className="about-social-icons">
                      <a href={member.socials.facebook} target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href={member.socials.twitter} target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;