import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div style={headerWrapperStyle} className="pt-4">
        <h1 style={headerStyle}>UX Luxury Auto Store</h1>
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
