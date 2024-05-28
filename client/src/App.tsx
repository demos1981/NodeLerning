import React from "react";

import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
