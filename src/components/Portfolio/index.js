import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Project from "../Project";
import projectsArr from "./projects.json";

function Portfolio() {
  const [projects, setProjects] = useState(projectsArr);
  return (
    <React.Fragment>
      <Container className="container">
        <Row id="padding">
          <Col />
          <Col md={12}>
            <Card className="card text-center">
              <h3>Portfolio</h3>
              <hr />
              <Card.Body className="card-body">
                <Row className="row">
                  {projects.map((project) => (
                    <Project
                      className="project"
                      key={project.id}
                      name={project.name}
                      image={project.image}
                      description={project.description}
                      deployed={project.deployed}
                      repo={project.repo}
                    />
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Portfolio;
