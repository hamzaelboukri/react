import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Ebankify from "../../Assets/Projects/ebankify.jpg";
import Citronix from "../../Assets/Projects/citronix.webp";
import BatiCuisine from "../../Assets/Projects/batiCuisine.jpg";
import Evanto from "../../Assets/Projects/Evanto.webp";
import DevSync from "../../Assets/Projects/TaskManagement.jpg";
import MedCommerce from "../../Assets/Projects/medcommerce.png";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ebankify}
              isBlog={false}
              title="Ebankify"
              description="Ebankify is a full-stack banking application designed to provide users with a seamless and secure banking experience. The system includes features such as user management, account management, transaction processing, and loan management. Built with a robust architecture, Ebankify ensures high performance, scalability, and reliability."
              ghLink="https://github.com/MedELHattab/E-Bankify.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Citronix}
              isBlog={false}
              title="Citronix"
              description="Citronix is a comprehensive farming and harvest management system designed to streamline agricultural operations, improve productivity, and optimize resource management. The system provides tools for crop planning, harvest tracking, inventory management, and data analytics to help farmers make informed decisions and maximize yields"
              ghLink="https://github.com/MedELHattab/M_Citronix.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevSync}
              isBlog={false}
              title="DevSync"
              description="DevSync is a task management system designed to help teams organize, track, and manage tasks efficiently. The system incorporates a token-based workflow to prioritize tasks, enforce deadlines, and ensure smooth collaboration among team members. It provides a centralized platform for task assignment, progress tracking, and performance analysis"
              ghLink="https://github.com/MedELHattab/DevSync.git"
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={BatiCuisine}
              isBlog={false}
              title="BatiCuisine"
              description="BatiCuisine is a Java application designed for professionals in the construction and renovation of kitchens. The application calculates the total cost of the work by taking into account the materials used and the cost of labor, which is billed on an hourly basis."
              ghLink="https://github.com/MedELHattab/BatiCuisine.git"
              style={{ height: "100%" }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MedCommerce}
              isBlog={false}
              title={<><br /><br /><br />MedCommerce</>}
              description="MedCommerce is a full-stack e-commerce platform designed to provide users with a seamless online shopping experience. The platform includes features such as product browsing, shopping cart management, user authentication, and order processing."
              ghLink="https://github.com/MedELHattab/MedCommerce.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Evanto}
              isBlog={false}
              title="Evanto"
              description="Evanto is an event ticket management system designed to streamline the process of organizing, selling, and managing event tickets. The system provides event organizers with tools to create events, manage ticket sales, and track attendee information, while offering users a seamless experience for purchasing and managing their tickets."
              ghLink="https://github.com/MedELHattab/Evento.git"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
