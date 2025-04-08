import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi everyone, I am <span className="purple">Hamza EL Boukri</span>
    from <span className="purple">Morocco</span>.
    <br />
    I am currently a full-stack developer.<br />
    <br />
    I am a full-stack web development student at Youcode.
    <br />
    <br />
    Apart from coding, here are some other activities that I love!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Reading Manga
    </li>
    <li className="about-activity">
      <ImPointRight /> Travelling
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make a difference!"
  </p>
  <footer className="blockquote-footer">Hamza EL Boukri</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
