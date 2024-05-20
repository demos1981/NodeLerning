// import React from "react";
// import { createRoot } from "react-dom/client";

// import { App } from "./components/App";

// const container = document.getElementById("app");
// const root = createRoot(container!);
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./index.css";
// const App: React.FC = () => {
//   return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
// };

// export { App };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
