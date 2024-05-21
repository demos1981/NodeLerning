import React from "react";

import PageHeader from "./layouts/PageHeader";
import { BrowserRouter } from "react-router-dom";
import Approuter from "./routes/Approuter";

const App = () => {
  return (
    <BrowserRouter>
      <Approuter />
      <PageHeader />
    </BrowserRouter>
  );
};

export default App;
