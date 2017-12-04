import React from "react";
import { Router, Link } from "react-static";
//
import Routes from "react-static-routes";
import { Col, Navbar, NavbarBrand, Row } from "reactstrap";

import logo from "./header_logo.png";

import "App.css";

export default () => (
  <Router>
    <div className="wrapper">
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/"> Portal </NavbarBrand>
      </Navbar>
      <div className="content container">
        <Row>
          <Col md="4" className="order-md-1">
            <div className="docs-sidebar mb-3">
              <h5>Portal</h5>
              <ul className="flex-column nav">
              <li className="nav-item">
                  <Link to="/portal" className="nav-link">
                    Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portal/schedule-task" className="nav-link">
                    Schedule a new Task.
                  </Link>
                </li>
              </ul>
              <h5>License Monitoring System</h5>
              <ul className="flex-column nav">
              <li className="nav-item">
                  <Link to="/lms/overview" className="nav-link">
                    Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/lms/custom-device-auth" className="nav-link">
                    Custom device authentication
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portal/automatic-deployment" className="nav-link">
                  Deployment (Automatic)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portal/manual-deployment" className="nav-link">
                  Deployment (Manual)
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="8" className="order-md-2">
           <Routes />
          </Col>
        </Row>
      </div>
    </div>
  </Router>
);
