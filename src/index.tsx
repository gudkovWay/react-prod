import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "./theme/ThemeProvider";
import App from "./App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
