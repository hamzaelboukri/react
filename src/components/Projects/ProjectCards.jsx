import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="card-container" 
      onMouseEnter={() => setIsFlipped(true)} 
      onMouseLeave={() => setIsFlipped(false)}
      style={{ height: "100%" }}
    >
      <Card className="project-card-view" style={{ 
        height: "100%",
        transition: "transform 1.2s ease-in-out", // Slower transition
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        transformStyle: "preserve-3d"
      }}>
        {/* Front side */}
        <div style={{ 
          backfaceVisibility: "hidden",
          position: isFlipped ? "absolute" : "relative",
          width: "100%",
          height: "100%",
          opacity: isFlipped ? "0" : "1",
          transition: "opacity 0.9s ease-in-out"
        }}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          </Card.Body>
        </div>
        
        {/* Back side */}
        <div style={{ 
          backfaceVisibility: "hidden",
          position: isFlipped ? "relative" : "absolute",
          width: "100%",
          height: "100%",
          opacity: isFlipped ? "1" : "0",
          transition: "opacity 0.8s ease-in-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}>
          <Card.Title className="mb-4">{props.title} - Technologies</Card.Title>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "10px", 
            justifyContent: "center" 
          }}>
            {props.languages.map((lang, index) => (
              <span key={index} style={{ 
                backgroundColor: "#623686", 
                color: "white", 
                padding: "8px 15px", 
                borderRadius: "20px", 
                margin: "5px",
                transition: "transform 0.3s ease-in-out",
                cursor: "default"
              }}>
                {lang}
              </span>
            ))}
          </div>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank" 
            style={{ marginTop: "20px" }}
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ProjectCards;  