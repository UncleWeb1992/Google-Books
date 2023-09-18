import { createRoot } from "react-dom/client";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "Components/common/ErrorBoundary";
import { Provider } from "react-redux";
import store from "store";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>
);
