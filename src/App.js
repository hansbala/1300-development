import "./App.css";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { masterCarList } from "./assets/carList";
import Header from "./layout/Header";
import CarList from "./components/CarList";
import Cart from "./components/Cart";
import Refine from "./components/Refine";

class App extends Component {
  state = {
    cars: masterCarList,
    refinedCars: masterCarList,
    brandCategory: "All",
    yearCategory: "All",
    priceCategory: "Select",
  };

  // Sorts and filters the original list based on the state variables
  refineCarList = () => {
    // Filter and then sort
    let localRefined = masterCarList;
    // Filter by brand
    localRefined = localRefined.filter((car) => {
      return (
        this.state.brandCategory === "All" ||
        car.brand === this.state.brandCategory
      );
    });
    localRefined = localRefined.filter((car) => {
      return (
        this.state.yearCategory === "All" ||
        car.year === parseInt(this.state.yearCategory)
      );
    });
    // Finally sort by price but don't sort at all if not selected
    if (this.state.priceCategory === "Select") {
      this.setState({
        refinedCars: localRefined,
      });
      return;
    }
    let mult = 1;
    if (this.state.priceCategory === "Highest to Lowest") mult = -1;
    localRefined.sort((car1, car2) => {
      if (car1.price < car2.price) {
        return -1 * mult;
      } else if (car1.price > car2.price) {
        return 1 * mult;
      } else {
        return 0;
      }
    });
    this.setState({
      refinedCars: localRefined,
    });
  };

  // Changes the price category and then sorts the list
  changePriceSort = (sortType) => {
    // Sort type can be one of the following:
    // ["Select", "Lowest to Highest", "Highest to Lowest"]
    this.setState(
      {
        priceCategory: sortType,
      },
      () => this.refineCarList()
    );
    // this.refineCarList();
  };

  // Changes the brand filter category
  changeBrandFilter = (filterName) => {
    this.setState(
      {
        brandCategory: filterName,
      },
      () => this.refineCarList()
    );
    // this.refineCarList();
  };

  // Changes the year filter category
  changeYearFilter = (filterName) => {
    this.setState(
      {
        yearCategory: filterName,
      },
      () => this.refineCarList()
    );
    // this.refineCarList();
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
            {/* Filtering component */}
            <Refine
              changeBrandFilter={this.changeBrandFilter}
              changeYearFilter={this.changeYearFilter}
              changePriceSort={this.changePriceSort}
              brandCategory={this.state.brandCategory}
              yearCategory={this.state.yearCategory}
              priceCategory={this.state.priceCategory}
            />
            <CarList addToCart={this.addToCart} cars={this.state.refinedCars} />
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
