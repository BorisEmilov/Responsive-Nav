import React from "react";
import LargeNav from './components/LargeNav'
import SmDeviceNav from "./components/SmDeviceNav";

function App() {
  return (
    <div className="App">
      <LargeNav />
      <SmDeviceNav />
    </div>
  );
}

export default App;
