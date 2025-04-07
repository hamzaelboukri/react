import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiPython,
  DiJavascript1,
  DiReact,
  DiMysql,
  DiGit,
  DiPostgresql,
} from "react-icons/di";
import { SiSpring, SiPhp, SiLaravel, SiAngular, SiVuedotjs, SiJenkins } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      {/* Spring */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      {/* PHP */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      {/* Laravel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      {/* Angular */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      {/* PostgreSQL */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* Vue.js */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
      </Col>
      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* Jenkins */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
    </Row>
  );
}

export default Techstack;