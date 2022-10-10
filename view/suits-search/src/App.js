import React from "react";
import Search from "./components/Search";
import suits from "./suits";
import "./App.css";

function App() {
  return (
    <>
      <div className="tc ma0 pa4 min-vh-100 b--solid">
        <Search details={suits} />
      </div>
    </>
  );
}

export default App;
