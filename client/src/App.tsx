import React from "react";

import PageHeader from "./layouts/PageHeader";
import { BrowserRouter } from "react-router-dom";
import { CategoryMenu } from "./components/CategoryMenu";
import { categories } from "./data/home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="flex justify-center flex-grow-1 overflow-auto ">
          <div className="sticky top-0  z-10 pb-4 ">
            <CategoryMenu categories={categories} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
