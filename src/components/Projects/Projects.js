import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Imports for the new projects' icons
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiTypescript,
  SiOpenjdk,
} from "react-icons/si";


// NOTE: All image imports for originalProjects have been removed.

function Projects() {
  // Base URL for new GitHub projects
  const GITHUB_BASE = "https://github.com/PhalePallo/";

  // New projects with icons instead of imgPath
  const newProjects = [
    {
      title: "Movie/Series/Anime Recommendation App",
      description: "Movie/series/anime recommendation app that uses AI to recommend a movie.",
      ghLink: `${GITHUB_BASE}Movie-series-anime_recommendation_app`,
      type: "web",
      Icon: SiJavascript,
    },
    {
      title: "Agile Chatbot",
      description: "Chatbot app, created with collaborators using HTML, CSS, and JavaScript. It runs on a **Node.js server** (`server.js`), includes `package.json` for dependency management, and uses **GitHub Actions** (`main_chatbot.yml`) for its CI/CD pipeline.",
      ghLink: `${GITHUB_BASE}Agile-chatbot-`,
      type: "web",
      Icon: SiJavascript,
    },
    {
      title: "Data Pipeline Builder (SQL & ETL)",
      description: "SQL & ETL foundation project for building a data pipeline.",
      ghLink: `${GITHUB_BASE}data-pipeline-builder`,
      type: "web",
      Icon: SiPython,
    },
    {
      title: "AI Insights Prototype",
      description: "An interactive web dashboard for small businesses featuring AI-powered recommendations, chat support, settings management, and help/FAQ functionality. Built with HTML, CSS, and JavaScript, the structure includes multiple pages (`dashboard.html`, `chat.html`, `help.html`, `settings.html`), a shared `script.js` and `style.css`, and organized assets.",
      ghLink: `${GITHUB_BASE}AI-Insights-Prototype`,
      type: "web",
      Icon: SiHtml5,
    },
    {
      title: "Expense Tracker App",
      description: "Expense tracker application built using JavaScript.",
      ghLink: `${GITHUB_BASE}Expense_tracker`,
      type: "web",
      Icon: SiJavascript,
    },
    {
      title: "Issue Tracker (Flask)",
      description: "Issue tracker using HTML, CSS, Python (Flask) and JavaScript.",
      ghLink: `${GITHUB_BASE}Issue_tracker`,
      type: "web",
      Icon: SiFlask,
    },
    {
      title: "2D Platformer Game",
      description: "2D Platformer Game using HTML, CSS, JS. This project, which appears to also serve as a foundational boilerplate, includes core files such as `index.html`, `script.js`, `style.css`, and a Flask backend structure (`app.py`, `templates`), alongside configuration files like `settings.json` and data files like `expenses.json`.",
      ghLink: `${GITHUB_BASE}Platformer_Game`,
      type: "web",
      Icon: SiJavascript,
    },
    {
      title: "Decimal/Binary Visualizer",
      description: "A JavaScript application for visualizing decimal to binary conversion.",
      ghLink: `${GITHUB_BASE}decimal-binary-visualizer`,
      type: "web",
      Icon: SiJavascript,
    },
    {
      title: "To Do App (localStorage)",
      description: "A responsive todo list app using localStorage, HTML, CSS, and JavaScript.",
      ghLink: `${GITHUB_BASE}To_Do-App`,
      type: "web",
      Icon: SiJavascript,
    },
    {
      title: "Arithmetic Formatter (CLI & Flask)",
      description: "A CLI and Flask-based Arithmetic Formatter with unit tests.",
      ghLink: `${GITHUB_BASE}Arithmetic_Formatter`,
      type: "web",
      Icon: SiPython,
    },
    {
      title: "Square Root Bisection Project",
      description: "This Python project implements the Bisection Method to estimate the square root of a number without using built-in functions like `math.sqrt()`. It includes visualization using `matplotlib`.",
      ghLink: `${GITHUB_BASE}Square_root_bisection_project`,
      type: "web",
      Icon: SiPython,
    },
    {
      title: "VS Code Case Refactor Extension",
      description: "A VS Code extension to automatically refactor variable and method names from PascalCase or camelCase to `snake_case` using TypeScript.",
      ghLink: `${GITHUB_BASE}Case_Refactor_extension`,
      type: "web",
      Icon: SiTypescript, 
    },
    {
      title: "Palindrome Checker App",
      description: "Palindrome checker app built using HTML, CSS and JavaScript.",
      ghLink: `${GITHUB_BASE}Palindrome_checker_app`,
      type: "web",
      Icon: SiCss3,
    },
    {
      title: "Cipher Challenge Game",
      description: "A Python-based cipher challenge game, featuring `cipher_game.py` (core logic) and `cipher_gui.py` (GUI implementation), which tracks user performance using a `highscores.txt` file.",
      ghLink: `${GITHUB_BASE}Cipher_challenge_game`,
      type: "web",
      Icon: SiPython,
    },
    {
      title: "Calorie Counter App",
      description: "Calorie Counter App built using HTML, CSS and JavaScript.",
      ghLink: `${GITHUB_BASE}Calorie-Counter-App`,
      type: "web",
      Icon: SiJavascript,
    },
    {
      title: "ResumeApp",
      description: "Resume app with tic tac toe game built using C#, JavaScript, CSS and HTML.",
      ghLink: `${GITHUB_BASE}ResumeApp`,
      type: "web",
      Icon: SiHtml5,
    },
    {
      title: "WeatherApp2 (Java/JS)",
      description: "Weather app using OpenWeather API with HTML, CSS and JS as frontend along with a **Java (Servlet) backend** (`WeatherApp.java`). The project has a standard web application structure with `src/main/java` and `src/main/webapp/WEB-INF/web.xml`, utilizing **GitHub Actions** for CI/CD (`master_weatherapp2.yml`).",
      ghLink: `${GITHUB_BASE}WeatherApp2`,
      type: "web",
      Icon: SiOpenjdk,
    },
    {
      title: "Weather App (WebApp01)",
      description: "Weather app using OpenWeather API with HTML, CSS and JS.",
      ghLink: `${GITHUB_BASE}WebApp01-WeatherApp`,
      type: "web",
      Icon: SiJavascript,
    },
  ];

  // The originalProjects array has been removed.
  // Combine new and existing projects
  const projects = newProjects;

  // State for search and filter
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || project.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on — filter by type or search by name.
        </p>

        {/* 🔍 Search + Filter */}
        <div className="project-filters" style={{ position: "relative", zIndex: 10 }}>
          <Form.Control
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ position: "relative", zIndex: 10 }}
          />
          <div className="filter-buttons" style={{ position: "relative", zIndex: 10 }}>
            <button
              className={filter === "all" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("all")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              All
            </button>
            <button
              className={filter === "web" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("web")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Web
            </button>
            <button
              className={filter === "mobile" ? "btn-active" : "btn-inactive"}
              onClick={() => setFilter("mobile")}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;