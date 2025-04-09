  import React, { useEffect, useState } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import ProjectCard from "./ProjectCards";
  import Particle from "../Particle";
  import Spinner from "react-bootstrap/Spinner";

  function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const apiUrl = "https://api.jsonbin.io/v3/b/67f62f8a8561e97a50fba323";
        
    

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
      
          setProjects(data.record);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
          setLoading(false);
        });
    }, []);

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
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {projects.map((project, index) => (
                <Col md={4} key={index} className="project-card">
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    title={project.title}
                    description={project.description}
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