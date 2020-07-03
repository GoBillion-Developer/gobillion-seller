import React, { Component } from "react";
export default class ListItem extends Component {
  handleClick = () => {
    const {
      option: { id },
      onClick,
    } = this.props;
    onClick(id);
  };

  render() {
    const {
      option: { label },
    } = this.props;
    return <li onClick={this.handleClick}>{label}</li>;
  }
}
