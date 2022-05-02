import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Confirm from "./components/Confirm";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        {/* <Route path="/edit/:id?" element={<Edit />} />{" "} */}
        <Route path="/edit" element={<Edit />}>
          <Route path=":id" element={<Edit />} />
        </Route>
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/submission" element={<Success />} />
        {/* <Route path="/">
          {" "}
          <h1>React redux app</h1>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
