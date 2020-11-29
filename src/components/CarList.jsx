import React, { Component } from "react";
import propTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Car from "./Car";

export class CarList extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }} className="p-4">
        {/* <h2>List Of Available Cars</h2> */}
        <Row className="d-flex flex-wrap">
          {this.props.cars.map((car) => (
            <Col md={4} sm={6} key={car.id} className="my-2">
              <Car addToCart={this.props.addToCart} car={car} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

// Static checking of props
CarList.propTypes = {
  cars: propTypes.array.isRequired,
  addToCart: propTypes.func.isRequired,
};

export default CarList;
