import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Spinner from "react-bootstrap/Spinner";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = "https://api.jsonbin.io/v3/b/67f62f8a8561e97a50fba323";
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data.record);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      } 
    };

    fetchProjects();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Hover over a card to see technologies used.
        </p>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : error ? (
          <div className="text-center text-danger">
            {error}
          </div>
        ) : (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="project-card">
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  description={project.description}
                  languages={project.languages}
                  ghLink={project.ghLink}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Projects;