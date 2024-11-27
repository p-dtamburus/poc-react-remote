import React from "react";
import { createRoot } from "react-dom/client";
import ProfitChart from "./components/ProfitChart";
import "./App.css";


class TestComponent extends React.Component {
  render() {
    return (
      <>
        <div className="react-container">
          <h6>React Remote App</h6>
          <ProfitChart />
        </div>
      </>
    );
  }
}

export default TestComponent;

class TestComponentElement extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<TestComponent />);
  }
}

customElements.define(
  "react-remote-test-component-element",
  TestComponentElement
);
