import React, { Component } from "react";
import { Consumer } from "./ContextProvider";

class A extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(colors) => {
            return (
              <div style={{ color: colors ? "green" : "red" }}>
                class Component
              </div>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
export default A;
