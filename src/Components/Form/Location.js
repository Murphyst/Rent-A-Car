import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Col, InputGroup, Form, Dropdown } from "react-bootstrap";

export default props => (
  <Col xs={6}>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="form-location">
          <FaMapMarkerAlt />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        type="text"
        aria-label="location"
        aria-describedby="inputGroupPrepend"
        onChange={props.handleOnChangeLocation}
        value={props.locationValue}
        isValid={props.originPlaceId}
        isInvalid={props.locationValue === ""}
        required
      />
      <Form.Control.Feedback type="invalid">
        Please enter a city.
      </Form.Control.Feedback>
    </InputGroup>
    <Dropdown id="location-dropdown">
      {props.locations &&
        props.locations.map((l, index) => (
          <Dropdown.Item
            id="location-dropdownItem"
            onClick={() => props.handleResults(l)}
            key={index}
          >
            {l.label}
          </Dropdown.Item>
        ))}
    </Dropdown>
  </Col>
);
