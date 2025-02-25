import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,

  SiSlack,
  SiVercel,
  SiMacos,
  SiMeta,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import {
  DiUbuntu,
} from "react-icons/di";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiNetlify/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbBrandGoogleAnalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMeta/>
      </Col>
    </Row>
  );
}

export default Toolstack;
