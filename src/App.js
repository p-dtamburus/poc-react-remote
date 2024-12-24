import "./App.css";
import ParentComponent from "./components/ParentComponent";
import SendBirdWrapper from "./components/SendBirdWrapper";
import SendBirdWrapperv2 from "./components/SendBirdWrapperv2";
import { Tests } from "./components/Tests";
import ThemeApp from "./components/ThemeApp";
import { Timer } from "./components/Timer";
import UseEffectExample from "./components/UseEffect";
import WebComponent from "./WebComponent";

function App() {
  return (
    <>
      {/* <WebComponent/> */}
      {/* <Tests name="Maria" age="22"/> */}
      {/* <ParentComponent/> */}
      {/* <Timer/> */}
      {/* <ThemeApp/> */}
      
      <SendBirdWrapper/>
      {/* <SendBirdWrapperv2/> */}
    </>
  );
}

export default App;
