import React from "react";

import PageHeader from "./layouts/PageHeader";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <PageHeader />
    </BrowserRouter>
  );
};

export default App;
