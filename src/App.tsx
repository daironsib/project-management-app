import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/constants";
import { Registration } from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.registration} element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
