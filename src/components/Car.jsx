import React, { Component } from "react";
import propTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/**
 * Each Car prop is formatted like so:
 * {
        id: 1,
        model: "Gallardo",
        brand: "Lamborghini",
        year: 2009,
        price: 120099,
        imageName: "lamborghini_gallardo.jpg",
    },
 */
export class Car extends Component {
  render() {
    const {
      id,
      model,
      brand,
      year,
      price,
      imageName,
      cartCounter,
    } = this.props.car;
    const imgPath = "img/" + imageName;
    return (
      <Card style={cardStyle}>
        <Card.Img variant="top" src={imgPath} />
        <Card.Body>
          <Card.Title> {brand + " " + model} </Card.Title>
          <Card.Text>
            <span>Year: {year}</span>
            <br></br>
            <span>Price: ${price.toLocaleString("en-US")}</span>
          </Card.Text>
          <Button
            onClick={this.props.addToCart.bind(this, id)}
            variant="primary"
            disabled={cartCounter !== 0}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

// Each car card styling
const cardStyle = {
  // backgroundColor: "#a6f6f1",
  textAlign: "center",
  height: "100%",
};

// Define props for the Car component
Car.propTypes = {
  car: propTypes.object.isRequired,
  addToCart: propTypes.func.isRequired,
};

export default Car;
