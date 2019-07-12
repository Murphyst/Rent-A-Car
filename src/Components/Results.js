import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

export default props => (
  <Container
    className="justify-content-between"
    style={{ marginTop: "4rem", maxWidth: "100%" }}
    fluid={true}
  >
    <Row noGutters="true">
      {props.offers &&
        props.offers.map(d => (
          <Col key={d.vehicleyTypeId}>
            <Card
              className="justify-content-between"
              style={{ width: "20rem", minHeight: "24rem" }}
            >
              <Card.Img alt={d.title} src={d.web_img} />
              <Card.Body>
                <Card.Title>{d.title}</Card.Title>
                <Card.Text>
                  {d.currency === "GBP" ? "£" : d.currency}
                  {d.amount}
                </Card.Text>
                <Card.Subtitle>{d.exampleCar}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  </Container>
);
