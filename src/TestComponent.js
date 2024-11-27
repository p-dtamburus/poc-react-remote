import React from "react";
import ReactDOM from "react-dom";
import ProfitChart from "./components/ProfitChart";
import "./App.css";

import { Button } from "./components/Button";

class TestComponent extends React.Component {
  render() {
    return (
      <>
        <div class="react-container">
          <h6>React Remote App</h6>
          {/* <Button /> */}

          <ProfitChart />
        </div>
      </>
    );
  }
}

export default TestComponent;

class TestComponentElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<TestComponent />, this);
  }
}

customElements.define(
  "react-remote-test-component-element",
  TestComponentElement
);
