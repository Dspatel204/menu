import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Provider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>
);
