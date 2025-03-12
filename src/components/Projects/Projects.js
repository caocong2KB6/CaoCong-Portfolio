import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vsat from "../../Assets/Projects/vsat.png";

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
              imgPath={vsat}
              isBlog={false}
              title="VSAT"
              description="VSAT is an SAT preparation platform that personalizes study plans, tracks student progress in real-time, and adapts test strategies based on performance. Designed for students, teachers, and administrators, it streamlines learning management, test preparation, and performance evaluation. By leveraging technology, VSAT ensures a more efficient, adaptive, and results-driven approach to SAT success."
              ghLink="https://github.com/caocong2KB6/vsat-server"
              demoLink="https://github.com/caocong2KB6/vsat-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vsat}
              isBlog={false}
              title="VSAT"
              description="VSAT is an SAT preparation platform that personalizes study plans, tracks student progress in real-time, and adapts test strategies based on performance. Designed for students, teachers, and administrators, it streamlines learning management, test preparation, and performance evaluation. By leveraging technology, VSAT ensures a more efficient, adaptive, and results-driven approach to SAT success."
              ghLink="https://github.com/caocong2KB6/vsat-server"
              demoLink="https://github.com/caocong2KB6/vsat-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vsat}
              isBlog={false}
              title="VSAT"
              description="VSAT is an SAT preparation platform that personalizes study plans, tracks student progress in real-time, and adapts test strategies based on performance. Designed for students, teachers, and administrators, it streamlines learning management, test preparation, and performance evaluation. By leveraging technology, VSAT ensures a more efficient, adaptive, and results-driven approach to SAT success."
              ghLink="https://github.com/caocong2KB6/vsat-server"
              demoLink="https://github.com/caocong2KB6/vsat-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vsat}
              isBlog={false}
              title="VSAT"
              description="VSAT is an SAT preparation platform that personalizes study plans, tracks student progress in real-time, and adapts test strategies based on performance. Designed for students, teachers, and administrators, it streamlines learning management, test preparation, and performance evaluation. By leveraging technology, VSAT ensures a more efficient, adaptive, and results-driven approach to SAT success."
              ghLink="https://github.com/caocong2KB6/vsat-server"
              demoLink="https://github.com/caocong2KB6/vsat-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vsat}
              isBlog={false}
              title="VSAT"
              description="VSAT is an SAT preparation platform that personalizes study plans, tracks student progress in real-time, and adapts test strategies based on performance. Designed for students, teachers, and administrators, it streamlines learning management, test preparation, and performance evaluation. By leveraging technology, VSAT ensures a more efficient, adaptive, and results-driven approach to SAT success."
              ghLink="https://github.com/caocong2KB6/vsat-server"
              demoLink="https://github.com/caocong2KB6/vsat-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vsat}
              isBlog={false}
              title="VSAT"
              description="VSAT is an SAT preparation platform that personalizes study plans, tracks student progress in real-time, and adapts test strategies based on performance. Designed for students, teachers, and administrators, it streamlines learning management, test preparation, and performance evaluation. By leveraging technology, VSAT ensures a more efficient, adaptive, and results-driven approach to SAT success."
              ghLink="https://github.com/caocong2KB6/vsat-server"
              demoLink="https://github.com/caocong2KB6/vsat-server"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
