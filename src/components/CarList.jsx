import React, { Component } from "react";
import propTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Car from "./Car";

export class CarList extends Component {
  render() {
    return (
      <Container>
        {/* <h2>List Of Available Cars</h2> */}
        <Row>
          {this.props.cars.map((car) => (
            <Col md={4} sm={6} key={car.id}>
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
