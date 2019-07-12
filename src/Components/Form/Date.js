import React from "react";
import { Col, InputGroup, Form } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";

export default props => (
  <Col>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="form-location">
          <FaCalendarAlt />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        type="date"
        name="date"
        onChange={props.handleDate}
        value={props.date}
        isValid={props.date > moment(new Date()).format()}
        isInvalid={
          props.date === "" ? false : props.date < moment(new Date()).format()
        }
      />
      <Form.Control.Feedback type="invalid">
        Please select a proper date
      </Form.Control.Feedback>
    </InputGroup>
  </Col>
);
