import React from "react";
import moment from "moment";
import axios from "axios";
import Results from "../Results";
import Location from "./Location";
import Date from "./Date";
import Duration from "./Duration";
import {
  Form,
  InputGroup,
  Button,
  Col,
  Row,
  Container,
  Modal
} from "react-bootstrap";

export default class LocationDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      locations: [],
      offers: [],
      originPlaceId: "",
      locationValue: " ",
      time: undefined,
      error: ""
    };
  }
  handleDate = e => {
    this.setState({ date: e.target.value });
  };
  handleChange = e => {
    this.setState({ time: e.target.value });
  };

  handleOnChangeLocation = e => {
    const location = e.target.value;
    if (this.state.locationValue !== undefined) {
      this.getLocation(location.trim());
    }
    this.setState({ locationValue: location, error: "" });
  };
  handleModal = () => {
    this.setState({ error: "" });
  };
  getLocation = async e => {
    try {
      if (e) {
        await axios
          .get(`http://localhost:3000/locations/?searchString=${e}&locale=us`)
          .then(response =>
            this.setState({
              locations: response.data
            })
          );
      }
    } catch (err) {
      console.log(err);
    }
  };
  handleResults = e => {
    this.setState({
      originPlaceId: e.originPlaceId,
      locationValue: e.label,
      locations: []
    });
  };
  handleSubmit = async e => {
    e.preventDefault();

    var date = moment(this.state.date).format();

    const time = this.state.time;
    const params = {
      duration: `${time * 60}`,
      originPlaceId: this.state.originPlaceId,
      selectedStartDate: date,
      type: "DURATION"
    };

    if (this.state.time && this.state.date && this.state.locationValue) {
      await axios
        .post(`http://localhost:3000/offers/`, params)
        .then(response => {
          this.setState({ offers: response.data, error: "" });
        });
    } else {
      this.setState({ error: "Please Fill the Form" });
    }
  };

  render() {
    return (
      <Container style={{ maxWidth: "80%" }}>
        <Container id="form-container" fluid={true}>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Location
                handleOnChangeLocation={this.handleOnChangeLocation}
                locationValue={this.state.locationValue}
                originPlaceId={this.state.originPlaceId}
                locations={this.state.locations}
                handleResults={this.handleResults}
              />
              <Date date={this.state.date} handleDate={this.handleDate} />
              <Duration
                handleChange={this.handleChange}
                time={this.state.time}
              />
              <Col xs={1}>
                <InputGroup>
                  <Button onClick={this.handleSubmit}>Search</Button>
                </InputGroup>
              </Col>
            </Row>
          </Form>

          {this.state.error && (
            <Modal.Dialog>
              <Modal.Header />
              <Modal.Body>
                <p>Please make sure that all inputs are correctly filled!</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleModal}>Close</Button>
              </Modal.Footer>
            </Modal.Dialog>
          )}
        </Container>
        <Container fluid={true}>
          <Row className="justify-content-between">
            <Results offers={this.state.offers} />
          </Row>
        </Container>
      </Container>
    );
  }
}
