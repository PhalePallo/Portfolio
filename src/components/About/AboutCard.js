import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I am <span className="purple">Pallo Phale</span> from{" "}
            <span className="purple">Germiston, South Africa</span>.
            <br />
            Currently strengthening foundational and advanced concepts in <span className="purple">Information Technology</span>.
            <br />
            <br />
            Apart from coding, my interests include **deejaying**, watching **football**, and exploring the world of **anime**, all of which contribute to my creativity and focus.
          </p>
          
          {/* List of specific activities. I've added 'Playing Games' back based on your earlier input. */}
          <p style={{ fontWeight: "bold" }}>
            Activities I Enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Deejaying
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Driven to leverage Full-Stack development skills to engineer scalable solutions that create a tangible, meaningful difference in digital experiences.
          </p>
          <footer className="blockquote-footer">Pallo Phale</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;