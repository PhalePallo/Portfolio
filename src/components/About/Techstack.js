import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiCss3,
  DiHtml5,
  DiVisualstudio,      // For C#
  DiBootstrap,         // For Bootstrap
  DiGoogleCloudPlatform, // Used as generic Cloud icon for Azure
} from "react-icons/di";
import {
  SiTypescript,
  SiFlask,
  SiChartdotjs,
} from "react-icons/si";

function Techstack() {
  // Define a style object to control the icon size across all columns
  const iconStyle = { fontSize: "2.5em" };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* CORE LANGUAGES */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiVisualstudio /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiTypescript /></Col>

      {/* FRAMEWORKS, LIBRARIES, & RUNTIMES */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiFlask /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiBootstrap /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiChartdotjs /></Col>

      {/* DEVOPS & TOOLS */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiGoogleCloudPlatform /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiGit /></Col>
      
      {/* WEB BASICS (Foundational Skills) */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiCss3 /></Col>

    </Row>
  );
}

export default Techstack;