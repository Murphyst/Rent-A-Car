import React from "react";
import { Col, InputGroup, Form } from "react-bootstrap";
import { FaRegHourglass } from "react-icons/fa";

const durations = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24
];
export default props => (
  <Col xs={2}>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>
          <FaRegHourglass />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        as="select"
        name="time"
        onChange={props.handleChange}
        value={props.time}
        isValid={props.time}
        isInvalid={props.time === "Duration"}
      >
        <option>Duration</option>
        {durations.map(d => (
          <option key={`${d} Hours`} value={d}>
            {d} Hours
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Please select hours
      </Form.Control.Feedback>
    </InputGroup>
  </Col>
);
