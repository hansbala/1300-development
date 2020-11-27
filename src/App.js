import "./App.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./layout/Header";
import CarList from "./components/CarList";
import Cart from "./components/Cart";

class App extends Component {
  state = {
    cars: [
      {
        id: 1,
        model: "Gallardo",
        brand: "Lamborghini",
        year: 2009,
        price: 120099,
        imageName: "lamborghini_gallardo.jpg",
        cartCounter: 0,
      },
      {
        id: 2,
        model: "Gallardo",
        brand: "Lamborghini",
        year: 2009,
        price: 120099,
        imageName: "lamborghini_gallardo.jpg",
        cartCounter: 0,
      },
      {
        id: 3,
        model: "Gallardo",
        brand: "Lamborghini",
        year: 2009,
        price: 120099,
        imageName: "lamborghini_gallardo.jpg",
        cartCounter: 0,
      },
      {
        id: 4,
        model: "Gallardo",
        brand: "Lamborghini",
        year: 2009,
        price: 120099,
        imageName: "lamborghini_gallardo.jpg",
        cartCounter: 0,
      },
    ],
  };

  // Modifies the cart count by (val)
  // i.e., either increments or decrements it
  // If removeFromCart is set, it sets the cartCount to 0
  modifyCart = (id, val, removeFromCart) => {
    this.setState({
      cars: this.state.cars.map((car) => {
        if (car.id === id && removeFromCart) {
          car.cartCounter = 0;
        } else if (car.id === id) {
          car.cartCounter += val;
        }
        return car;
      }),
    });
  };

  // Implements functionality for adding to the cart
  // If item is already in the cart, it increments the count
  // of the item in the cart
  addToCart = (id) => {
    this.modifyCart(id, +1, false);
  };

  // Changes the number of instances of particular item to val in the cart
  changeNumInCart = (id, val) => {
    console.log("this is running");
    this.setState({
      cars: this.state.cars.map((car) => {
        if (car.id === id) {
          car.cartCounter = val;
        }
        return car;
      }),
    });
  };

  // Removes the particular item from the cart
  removeFromCart = (id) => {
    this.modifyCart(id, 0, true);
  };

  render() {
    return (
      <Container fluid>
        <Header />
        <Row>
          <Col md={8}>
            <CarList addToCart={this.addToCart} cars={this.state.cars} />
          </Col>
          <Col md={4}>
            <Cart
              changeNumInCart={this.changeNumInCart}
              removeFromCart={this.removeFromCart}
              cart={this.state.cars}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
