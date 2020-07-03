import React, { Component } from "react";

export const ListingContext = React.createContext();

export default class ListingProvider extends Component {
  state = {
    step: "1",
    personalcare: "0",
    packedfood: "0",
    homecleaner: "0",
    herbal: "0",
    health: "0",
  };

  handleClick = (e) => {
    const { id } = e.target;

    switch (id) {
      case "c1":
        this.setState({ step: "1" });
        break;
      case "c2":
        this.setState({ step: "2" });
        break;
      case "c3":
        this.setState({ step: "3" });
        break;
      case "c4":
        this.setState({ step: "4" });
        break;
      case "c5":
        this.setState({ step: "5" });
        break;
    }
  };
  render() {
    return (
      <ListingContext.Provider
        value={{
          state: this.state,
          handleClick: this.handleClick,
        }}
      >
        {this.props.children}
      </ListingContext.Provider>
    );
  }
}
