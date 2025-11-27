import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* CONDITIONAL RENDERING: 
        If an Icon component is provided, render it instead of the image. 
      */}
      {props.Icon ? (
        <div 
          style={{ 
            padding: "20px", 
            textAlign: "center", 
            minHeight: "200px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            // Set a distinct background for the icon area if needed, e.g.,
            // backgroundColor: "rgba(255, 255, 255, 0.05)"
          }}
        >
          {/* Render the passed Icon component with a large size */}
          <props.Icon size={70} color="#c073fd" /> 
        </div>
      ) : (
        /* Fallback to original image rendering for existing projects */
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt={`${props.title} preview`}
          loading="lazy"
        />
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        <div style={{ 
          marginTop: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px"
        }}>
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              pointerEvents: "auto",
              position: "relative",
              zIndex: 10
            }}
          >
            <BsGithub size={18} />
            <span style={{ marginLeft: "8px" }}>
              {props.isBlog ? "Blog" : "GitHub"}
            </span>
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
                pointerEvents: "auto",
                position: "relative",
                zIndex: 10
              }}
            >
              <CgWebsite size={18} />
              <span style={{ marginLeft: "8px" }}>Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;