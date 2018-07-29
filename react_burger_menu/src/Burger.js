import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";

const MenuStyles = {
  /* Position and sizing of burger button */
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },

  /* Color/shape of burger icon bars */
  bmBurgerBars: {
    background: "#373a47"
  },

  /* Position and sizing of clickable cross button */
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },

  /* Color/shape of close button cross */
  bmCross: {
    background: "#bdc3c7"
  },

  /* General sidebar styles */
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },

  /* Morph shape necessary with bubble or elastic */
  bmMorphShape: {
    fill: "#373a47"
  },

  /* Wrapper for item list */
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },

  /* Individual item */
  bmItem: {
    display: "inline-block"
  },

  /* Styling of overlay */
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: "slide",
      side: "left"
    };
  }
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu right width={"20%"} styles={MenuStyles}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}

export default Burger;
