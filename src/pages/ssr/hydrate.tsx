import App from "./app";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
