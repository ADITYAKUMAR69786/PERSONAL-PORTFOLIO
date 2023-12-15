import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fit check thumb.png";
import projImg2 from "../assets/img/sort visual.png";
import projImg3 from "../assets/img/stock.png";
import projImg4 from "../assets/img/dashboard.png";
import projImg5 from "../assets/img/todolist.png";
import projImg6 from "../assets/img/calculator.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';

export const Projects = () => {

  const projects = [
    {
      title: "FITCHECK",
      description: "Heart Disease Detection System using Deep Learning",
      imgUrl: projImg1,
      
    },
    {
      title: "Sorting Visualizer",
      description: "Visualization of Sorting Algorithms using Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Stock Prediction App ",
      description: "Stock Price prediction based on trends using ML",
      imgUrl: projImg3,
    },
    {
      title: "Global Terrorism Analysis",
      description: "Visualization of dataset after EDA using PowerBI",
      imgUrl: projImg4,
    },
    {
      title: "To-Do List",
      description: "To-Do list with CRUD operation built using Web Development",
      imgUrl: projImg5,
    },
    {
      title: "Calculator Webapp",
      description: "Calculator Webapp",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> A brief overview of a project that is included in the portfolio including its purpose, goals, status, risks, stakeholders, and metrics. It is concise and easy to read, and it provides enough information to give a high-level overview of the project.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>A brief overview of a project that is included in the portfolio including its purpose, goals, status, risks, stakeholders, and metrics</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>A brief overview of a project that is included in the portfolio including its purpose, goals, status, risks, stakeholders, and metrics</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
