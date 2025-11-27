import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Particle from "../Particle";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm <b className="purple">Pallo Phale</b>,A passionate Full-Stack Developer and Digital Explorer based in Gauteng, South Africa. 
              I specialize in Python and JavaScript 💻 and love building, automating, and deploying resilient projects that leverage Generative AI and Azure CI/CD to make a scalable impact. 🚀
              <br />
              <br />
              I am fluent in <i><b className="purple">Python (Flask), JavaScript, and Azure CI/CD.</b></i>.
              <br />
              <br />
              My interests center on creating innovative, valuable <i><b className="purple">digital products</b></i>, 
              that focus on <i><b className="purple">workflow automation and data insights I am particularly keen on full-stack development that integrates Generative AI and ensures robust, scalable CI/CD pipelines."</b></i>.
              <br />
              <br />
              I am actively focused on mastering new frameworks and leveraging Generative AI to solve complex problems. I continuously seek opportunities to contribute to meaningful projects where I can implement robust CI/CD practices and drive architectural stability." 
              I particularly enjoy developing robust products using <b className="purple">Python (Flask), JavaScript (React/TypeScript), and enterprise languages like C# / Java. My greatest interest lies in implementing Generative AI solutions and ensuring production readiness via Azure CI/CD.</b> and 
              <i><b className="purple"> modern JavaScript libraries and frameworks</b></i> like 
              <i><b className="purple"> React.js and Node.js</b></i>.
              <br />
              <br />
              Outside of active development, I am dedicated to continuously mastering new digital methodologies, actively collaborating with fellow developers 🤝 on open-source principles, and focusing on turning innovative, AI-assisted concepts into functional, deployed products. 💡
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PhalePallo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Monsieur_Phale"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pallo-phale"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/monsieur____________pallo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;