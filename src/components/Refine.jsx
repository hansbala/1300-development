import React, { Component } from "react";
import propTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";

export class Refine extends Component {
  render() {
    return (
      <Container className="d-flex flex-row my-4">
        <div className="d-flex flex-row align-items-center px-2">
          <span className="mr-2">Filter by Brand:</span>
          <DropdownButton
            id="dropdown-basic-button"
            variant="success"
            onSelect={this.props.changeBrandFilter}
            title={this.props.brandCategory}
          >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Tesla">Tesla</Dropdown.Item>
            <Dropdown.Item eventKey="Lamborghini">Lamborghini</Dropdown.Item>
            <Dropdown.Item eventKey="Toyota">Toyota</Dropdown.Item>
            <Dropdown.Item eventKey="Chevrolet">Chevrolet</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="d-flex flex-row align-items-center px-2">
          <span className="mr-2">Filter by Year:</span>
          <DropdownButton
            id="dropdown-basic-button-2"
            onSelect={this.props.changeYearFilter}
            title={this.props.yearCategory}
          >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="2009">2009</Dropdown.Item>
            <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
            <Dropdown.Item eventKey="2014">2014</Dropdown.Item>
            <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="d-flex flex-row align-items-center px-2">
          <span className="mr-2">Sort by Price:</span>
          <DropdownButton
            id="dropdown-basic-button-3"
            onSelect={this.props.changePriceSort}
            title={this.props.priceCategory}
          >
            <Dropdown.Item eventKey="Select">Select</Dropdown.Item>
            <Dropdown.Item eventKey="Lowest to Highest">
              Lowest to Highest
            </Dropdown.Item>
            <Dropdown.Item eventKey="Highest to Lowest">
              Highest to Lowest
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </Container>
    );
  }
}

Refine.propTypes = {
  brandCategory: propTypes.string.isRequired,
  yearCategory: propTypes.string.isRequired,
  priceCategory: propTypes.string.isRequired,
  changeBrandFilter: propTypes.func.isRequired,
  changeYearFilter: propTypes.func.isRequired,
};

export default Refine;
