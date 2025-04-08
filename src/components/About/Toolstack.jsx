import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiDocker,
  SiAdobe, // Using SiAdobe instead of FaAdobe
} from "react-icons/si";
import { FaFigma } from "react-icons/fa"; // FaFigma is correct

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      {/* Figma */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      {/* Adobe */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe />
      </Col>
    </Row>
  );
}

export default Toolstack;