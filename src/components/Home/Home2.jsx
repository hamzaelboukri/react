import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/7O2A3107.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with web development, and I’ve learned a lot along the way as a Laravel Developer.
              <br />
              <br />
              I specialize in backend development using
              <i>
                <b className="purple"> Laravel, PHP, and MySQL. </b>
              </i>
              <br />
              <br />
              My passion lies in building robust
              <i>
                <b className="purple"> Web Applications, RESTful APIs, and Modern Designs, </b>
              </i>
              and I enjoy designing secure, scalable architectures that deliver strong performance.
              <br />
              <br />
              I’m also familiar with frontend technologies and like integrating them with
              <b className="purple"> Blade Templates, React, </b>
              and
              <i>
                <b className="purple"> modern JavaScript tools </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> Vue.js </b>
              </i>
              to create seamless user interfaces.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  marginTop: "80px",
                  width: "350px",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hamzaelboukri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-elboukri-374499335/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-elboukri-374499335/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              
                <a
                  href="https://www.instagram.com/regex._01/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
