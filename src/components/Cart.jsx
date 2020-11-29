import React, { Component } from "react";
import propTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    let totalAmount = 0;
    let cartItems = this.props.cart.filter((cartItem) => {
      return cartItem.cartCounter !== 0;
    });
    cartItems.forEach((car) => (totalAmount += car.price * car.cartCounter));
    return (
      <div style={cartWrapperStyle}>
        <h2>Cart</h2>
        <Row>
          {cartItems.map((car) => (
            <Col md={6} sm={6} key={car.id} className="my-2">
              <CartItem
                changeNumInCart={this.props.changeNumInCart}
                removeFromCart={this.props.removeFromCart}
                cartItem={car}
              />
            </Col>
          ))}
        </Row>
        <h3>Total Amount: ${totalAmount.toLocaleString("en-US")}</h3>
      </div>
    );
  }
}

// Cart Wrapper Style
const cartWrapperStyle = {
  padding: "20px",
  backgroundColor: "#fff",
};

// Static checking of prop types
Cart.propTypes = {
  cart: propTypes.array.isRequired,
  changeNumInCart: propTypes.func.isRequired,
  removeFromCart: propTypes.func.isRequired,
};

export default Cart;
