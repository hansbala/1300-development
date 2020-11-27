import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div style={headerWrapperStyle}>
        <h1 style={headerStyle}>CS1300 Car Shop</h1>
      </div>
    );
  }
}

// Header Styles
const headerWrapperStyle = {
  textAlign: "center",
};
const headerStyle = {
  color: "#000",
};

export default Header;
