import React from "react";
import { createRoot } from "react-dom/client";
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

import ProfitChart from "./components/ProfitChart";
import "./App.css";

class TestComponent extends React.Component {
  render() {
    return (
      <>
        
         

          <div style={{ width: "100vw", height: "100vh" }}>
            <SendbirdApp
               appId={'546ABAB3-6E78-4A6A-A13E-69AA3EE8BC72'}
               userId={'sendbird_desk_agent_id_ba1494bf-54b1-491f-b0d0-04efe1e22c41'}
               accessToken={'2da6130d3d4094014ff0ac83b030d28a7120d791'}
            />
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
