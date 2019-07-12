import React from "react";
import { Navbar, Col, Container } from "react-bootstrap";
export default props => (
  <Navbar bg="dark">
    <Container style={{ maxWidth: "80%" }}>
      <Col>
        <img
          width="auto"
          height="50"
          src="https://www.sixt.com/fileadmin/_processed_/csm_Sixt_mydriver_2d_4c_pos_b302d1dbef.png"
          alt="logo"
        />
      </Col>
      <Col>
        <div />
      </Col>
    </Container>
  </Navbar>
);
