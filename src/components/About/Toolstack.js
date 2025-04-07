import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiDocker,
  SiIntellijidea,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* Slack */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      {/* Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      {/* IntelliJ IDEA */}
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
    </Row>
  );
}

export default Toolstack;