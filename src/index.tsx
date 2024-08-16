import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import App from "app/App";

import "shared/config/lib/i18n/i18n";

const rootElement = document.getElementById("root");

const AppWithProviders = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);

ReactDOM.render(<AppWithProviders />, rootElement);
