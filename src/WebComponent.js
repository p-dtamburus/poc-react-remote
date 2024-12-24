import React from "react";
import { createRoot } from "react-dom/client";
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

import ProfitChart from "./components/ProfitChart";
import "./App.css";
import SendBirdWrapper from "./components/SendBirdWrapper";

class WebComponent extends React.Component {
  render() {
    return (     
          <SendBirdWrapper/>
    );
  }
}

export default WebComponent;

class WebComponentElement extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<WebComponent />);
  }
}

customElements.define(
  "react-remote-test-component-element",
  WebComponentElement
);
