import { StrictMode } from "./node_modules/react";
import { createRoot } from "./node_modules/react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
