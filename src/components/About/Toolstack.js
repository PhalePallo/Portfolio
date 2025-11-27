import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiGithub,
  SiPowers,             // Confirmed correct for PowerShell
  // SiMicrosoftpowerapps, // REMOVED to fix error
  SiShopify,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import {
    DiGit,              // For Git Bash / Git
    DiAws,              // Used for Azure Portal / Cloud context
    DiWindows,          // ADDED: Using DiWindows as a generic Microsoft/Power Apps icon
} from "react-icons/di";


function Toolstack() {
  // Style to set the icon size and remove names
  const iconStyle = { fontSize: "2.5em" };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Version Control & DevOps Tools */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiGithub /></Col>      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiGit /></Col>         {/* Git Bash */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiDocker /></Col>      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiKubernetes /></Col> {/* Kubernetes / Minikube / Kubectl */}

      {/* Cloud & Microsoft Tools */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiAws /></Col>         {/* Azure Portal */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiPowers /></Col>      {/* PowerShell */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><DiWindows /></Col>    {/* Power Apps (using DiWindows as substitute) */}
      
      {/* E-Commerce & Design Tools */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiShopify /></Col>     {/* Shopify */}
      <Col xs={4} md={2} className="tech-icons" style={iconStyle}><SiFigma /></Col>       {/* Figma */}
      
    </Row>
  );
}

export default Toolstack;