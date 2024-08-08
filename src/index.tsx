import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/providers/ThemeProvider";
import App from "app/App";

const rootElement = document.getElementById("root");

const AppWithProviders = () => (
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(<AppWithProviders />, rootElement);
