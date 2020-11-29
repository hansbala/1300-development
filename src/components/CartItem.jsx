import React, { Component } from "react";
import propTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class CartItem extends Component {
  changeNumInCart(id, value) {
    this.props.changeNumInCart.bind(this, id, value);
  }

  render() {
    const { id, brand, model, imageName, price, year } = this.props.cartItem;
    const imgPath = "img/" + imageName;
    return (
      <Card style={cartCardStyle}>
        <Card.Img variant="top" src={imgPath} />
        <Card.Body>
          <Card.Title> {brand + " " + model} </Card.Title>
          <Card.Text>
            <span>Year: {year}</span>
            <br></br>
            <span>Price: ${price}</span>
          </Card.Text>
          <Button
            onClick={this.props.removeFromCart.bind(this, id)}
            variant="primary"
            className="my-2"
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

// Cart Item Card Style
const cartCardStyle = {
  textAlign: "center",
};

CartItem.propTypes = {
  cartItem: propTypes.object.isRequired,
  changeNumInCart: propTypes.func.isRequired,
  removeFromCart: propTypes.func.isRequired,
};

export default CartItem;
